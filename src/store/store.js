import { defineStore } from "pinia";
import {ref, reactive, computed} from 'vue'

const myStore = defineStore('count', ()=>{
    const products = reactive([]);
    const allProducts = computed(products.length);
    const addProduct = (product) => {
        const data = {
            id:product.id,
            name:product.name,
            price:product.price
        }
        products.push(data)
    }
    return {products, allProducts, addProduct}
})

export {myStore}