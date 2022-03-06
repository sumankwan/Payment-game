<template>
  <div class="container bg-light" style="width: 900px;">
    <div class="row">
        <div class="col-sm text-center bg-white">
            <img src="../assets/leo.jpg" class="rounded-circle" style="width: 150px; height: 150px; margin-top: 50px; margin-bottom: 15px;" alt="">
            <h3 style="margin-bottom: 15px;">Spend Arnold's Money</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-sm text-center bg-success" style="margin-top: 15px; padding: 10px;">
            <h3 class="text-light">Rp. {{ rupiah }} left</h3>
        </div>
    </div>
    <div class="row">
      <Card v-for="(product, i) in products"
            :key="i"
            :productData="product">
      </Card>
    </div>
    <Receipt v-if="shopping"></Receipt>
  </div>
</template>

<script>
import Card from '../components/Card'
import Receipt from '../components/Receipt'
import socket from '../config/socket'
export default {
  name: 'Home',
  components: {
    Card, Receipt
  },
  computed: {
    money() {
      return this.$store.state.money
    },
    products () {
      return this.$store.state.products
    },
    rupiah () {
      return this.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    shopping() {
      return this.$store.state.shopping
    }
  },
  methods: {
  },
  created () {
      socket.emit('firstFetch')
      socket.on('returnMoney', (data) => {
        this.$store.dispatch('storeMoney', data)
      })
      socket.on('returnProducts', (data) => {
        this.$store.dispatch('storeProducts', data)
      })
  }
}
</script>

<style>

</style>
