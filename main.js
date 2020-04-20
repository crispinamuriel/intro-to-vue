/* eslint-disable quotes */
console.log('working as intended');

const app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    description: "These are comfy green socks! Made with 100% cotton.",
    image:
      "https://media.mysockfactory.ch/1313-thickbox_default/plain-green-socks.jpg",
    link: "https://www.happysocks.com/us/jumbo-dot-sock-green.html",
    inStock: false,
    inventory: 0,
    onSale: true,
    details: ["100% cotton", "size 8-12", "men's socks"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage:
          "https://media.mysockfactory.ch/1313-thickbox_default/plain-green-socks.jpg",
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage:
          "https://media.mysockfactory.ch/1428-thickbox_default/spy-blue-plain-socks.jpg",
      },
    ],
    sizes: ["size 4-7", "size 8-12", "size 13-15"],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    resetCart() {
      this.cart = 0;
    },
    updateProduct(img) {
      this.image = img;
    },
    decrementCart() {
      if (this.cart < 1) return;
      this.cart -= 1;
    }
  },
});
