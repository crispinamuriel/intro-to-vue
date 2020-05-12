// Vue.component('componentName', {
//  props: {
//     expectedPropToThisComponent: {
//          type: String,
//          required: true,
//          default: 'hi'
//     }
//  },
//  template: `<div></div>`,
//  data() {
//    return { attribute: value }
//  },
//  methods: {
//    addToCart() {}
//  },
//  computed: {
//    title () { return this.brand + ' ' + this.product }
//  }
// });

//first register your component uusing Vue.component
//            pass in the name of the component
Vue.component('product', {  //then pass in the 'options object'
  // options object contains the 'props object'
  props: {},
  //options object contains the template literal
  template: `<div>{{brand}}</div>`,
  //options object contains a data method that returns an object
  data () {
    //this data method should return an object
    return {
      //this returned object should hold all of the data passed to the component
      brand: 'Teddy Fresh',
      variants: [
        {
          variantId: 0,
        },
        {
          variantId: 1,
        }
      ]
    }
  },
  methods: {
    addToCart() {
      this.cart += 1;
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    }
  }
});

const app = new Vue({
  el: '#app'
});
