<template>
    <div class="card-body bg-white text-center" style="margin-top: 15px;">
        <h4>Your Receipt</h4>
        <Summary v-for="(item, i) in summary"
                :key="i"
                :itemData="item">
        </Summary>
        <br>
        <div class="row" style="margin: auto; width: 570px;">
            <div class="col-7">
                <span style="margin-right: 100px;">Total</span>
            </div>
            <div class="col-5">
                <span>Rp. {{ total }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import Summary from '../components/Summary'
export default {
    name: 'Receipt',
    components: {
        Summary
    },
    computed: {
        summary() {
            let container = []
            for (let i = 0; i< this.$store.state.purchased.length; i++) {
                if(this.$store.state.purchased[i]) {
                container.push(this.$store.state.purchased[i])
                }
            }
            return container
        },
        total() {
            return this.$store.state.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
    }
}
</script>

<style>

</style>