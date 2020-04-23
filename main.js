/* eslint-disable quotes */
console.log('working as intended');

const app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Mastery",
    outOfStock: "outOfStock",
    lineThrough: "lineThrough",
    product: "Socks",
    description: "These are comfy green socks! Made with 100% cotton.",
    selectedVariant: 0,
    link: "https://www.happysocks.com/us/jumbo-dot-sock-green.html",
    inventory: 0,
    onSale: true,
    details: ["100% cotton", "size 4-15", "Men's socks"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage:
          "https://media.mysockfactory.ch/1313-thickbox_default/plain-green-socks.jpg",
        variantQuantity: 10,
      },
      {
        variantId: 2235,
        variantColor: "cornflowerblue",
        variantImage:
          "https://media.mysockfactory.ch/1428-thickbox_default/spy-blue-plain-socks.jpg",
        variantQuantity: 0,
      },
    ],
    sizes: ["size 4-7", "size 8-12", "size 13-15"],
    cart: 0,
    styles: {
      color: "red",
      "text-decoration-line": "line-through",
    },
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    resetCart() {
      this.cart = 0;
    },
    updateProduct(i) {
      this.selectedVariant = i;
    },
    decrementCart() {
      if (this.cart < 1) return;
      this.cart -= 1;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity > 0;
    }
  },
});
