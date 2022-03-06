<template>
    <div class="col-4">
        <div class="card-body bg-white text-center" style="margin-top: 15px;">
            <img v-bind:src="productData.image" style="width: 150px; height: 150px; margin-bottom: 15px;" alt="">
            <h5 style="margin-bottom: 15px;">{{ productData.name }}</h5>
            <h5 style="margin-bottom: 15px;">Rp. {{ rupiah }}</h5>
            <span class="bg-light border" style="padding: 6px 15px; margin-right: 8px;">{{ productData.quantity }}</span>
            <button class="btn btn-success" @click="buyProduct(productData.id)">Buy</button>
        </div>
    </div>
</template>

<script>
import socket from '../config/socket'
export default {
  name: 'Card',
  props: ['productData'],
  computed: {
    rupiah () {
      return this.productData.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  methods: {
    buyProduct (id) {
      socket.emit('buyProduct', id)
      this.$store.dispatch('buyProduct', id)
    }
  },
  created() {
  }
}
</script>

<style>

</style>
