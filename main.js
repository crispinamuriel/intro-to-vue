/* eslint-disable quotes */
Vue.component("productDetails", {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  template: `
    <div>
      <ul>
            <li v-for="detail in details">
              {{detail}}hi
            </li>
          </ul>
    </div>
  `,
});

Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div>
      <div class="product">
        <div class="product-image">
          <a :href="link">
            <img v-bind:src="image" />
          </a>
        </div>



        <div class="product-info">
          <h1>
            {{title}}
          </h1>
          <p>{{description}}</p>

          <span style="color: green" v-if="onSale && inventory > 0">{{title}} On Sale!</span>
          <p v-if="inventory > 11">In Stock</p>
          <p style="color: rgb(187, 100, 0)" v-else-if="inventory <= 10 && inventory > 0">Almost out of stock!</p>
          <p :class="[inStock ? lineThrough : outOfStock]" v-else="">Out of Stock</p>

          <p> Shipping: {{shipping}}</p>



          <div v-for="(variant, i) in variants"
              :key="variant.variantId"
              class="color-box"
              :style="{backgroundColor: variant.variantColor}"
              @mouseover="updateProduct(i)">
          </div>

          <div v-for="size in sizes">
            <span>{{size}}</span>
          </div>

          <button v-on:click="addToCart"
                  :disabled="!inStock"
                  :class="{ disabledButton: !inStock }"
                  >Add</button>

          <div class="cart">
            <p>Cart({{cart}})</p>
          </div>
          <button v-on:click="decrementCart">Remove</button>
          <button v-on:click="resetCart">Reset Cart</button>

        </div>
      </div>
    </div>
  `,
  data() {
    return {
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
          variantQuantity: 100,
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
    };
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
      this.inventory = this.variants[i].variantQuantity;
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
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if (this.premium) {
        return  `Free`;
      } else {
        return '$5.99';
      }
    }
  },
});

const app = new Vue({
  el: "#app",
  data: {
    premium: true,
    details: ["100% cotton", "size 4-15", "Men's socks"]
  },
});
