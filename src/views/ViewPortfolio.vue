<template>
    <div class="portfolios">
        <Portfolio v-for="portfolio in store.portfolios" :key="portfolio.id" :portfolio="portfolio"/>
    </div>
</template>

<script>
import Portfolio from '@/components/Portfolio.vue'
import { store } from '../store.js'

export default ({
    components:{
        Portfolio,
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
        display: flex;
        grid-template-columns: repeat(3,1fr);
        gap: 10px;
        flex-wrap: wrap;
    }
</style>