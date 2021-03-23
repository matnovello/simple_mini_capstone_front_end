/* global Vue, axios */
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      toggleIndex: false,
      products: [],
      singleProduct: "",
      input:  "", 
      name: "",
      description: "",
      price: 0,
    };
  },
  methods: {
    index:  function () {
      console.log( "hello");
      axios.get("http://localhost:3000/api/products")
      .then(response => {
          console.log(response.data);
          this.products = response.data;
          this.toggleIndex = !this.toggleIndex;
        });
    },
    showProduct: function (){
      console.log(parseInt(this.input));
      axios.get("http://localhost:3000/api/products/" + this.input)
      .then(response => {
        this.singleProduct = response.data;
        
      });
    },
    createProduct: function (){
      axios.post("http://localhost:3000/api/products", {
        name: this.name,
        description:  this.description,
        price: this.price,

      }).then(response => {
        console.log(response.data);
      })
    }
  }
});