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
  },
});
