<template>
    <div class="portfolios">
        <Portfolio :route="router" v-for="portfolio in store.portfolios" :key="portfolio.id" :portfolio="portfolio"/>
    </div>
</template>

<script>
import Portfolio from '@/components/Portfolio.vue'
import { store } from '../store.js'

export default ({
    components:{
        Portfolio,
    },
    props:{
        router: String
    },
    data(){
        return{
            store
        }
    },
    async created(){
        store.portfolios = await store.fetchPortfolios()
    }
})
</script>

<style scoped lang='scss'>
    .portfolios{
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        // gap: 20px;
        flex-wrap: wrap;
        align-items: flex-start;
    }
</style>