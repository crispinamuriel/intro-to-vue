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
    inStock: true,
    inventory: 1,
    onSale: true,
    details: ["100% cotton", "size 8-12", "men's socks"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
      },
      {
        variantId: 2235,
        variantColor: "blue",
      },
    ],
    sizes: ["size 4-7", "size 8-12", "size 13-15"],
    cart: 0
  }
});
