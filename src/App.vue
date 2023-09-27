<script setup>
import {myStore} from './store/store.js'
</script>

<template>
  <!-- <div>
    <h1>Product Management</h1>
    <form @submit.prevent="addProduct">
      <label for="productName">Product Name:</label>
      <input type="text" id="productName" v-model="addProduct.name" required>
      <label for="productPrice">Product Price:</label>
      <input type="number" id="productPrice" v-model="addProduct.price" required>
      <button type="submit">Add Product</button>
    </form>
    <p>Total Products: {{ totalProducts }}</p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}
      </li>
    </ul>
  </div> -->

  <div>
    <h1>Product Management</h1>
    <button @click="addProduct">Add Product</button>
    <p>Total Products: {{ totalProducts }}</p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
