<template>
  <div class="about">
    <AddPortfolio/>
  </div>
</template>

<script>
import { store } from '../store.js'
import AddPortfolio from '@/components/AddPortfolio.vue'
export default{
    name: 'Portfolio',
    components: {
        AddPortfolio,
    },
    data(){
        return{
            store,
        }
    },
    methods:{
     
    },
    async created(){
        store.portfolios = await store.fetchPortfolios()
    }
}
</script>

<style scoped lang="scss">
   
</style>