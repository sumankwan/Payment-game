<template>
    <div class="row" style="margin: auto; width: 500px;">
      <div class="col-4">
          <span>{{ itemData.name }}</span>
      </div>
      <div class="col-4">
          <span>x{{ itemData.purchasedQuantity }} </span> 
      </div>
      <div class="col-4">
           <span>Rp. {{ rupiah }}</span> 
      </div>
    </div>
</template>

<script>
export default {
    name: 'Summary',
    props: ['itemData'],
    computed: {
        rupiah () {
            return this.itemData.purchasedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
    }
}
</script>

<style>

</style>