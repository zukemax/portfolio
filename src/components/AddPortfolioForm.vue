<template>
    <form  @submit.prevent="store.addPortfolio(e)">
        <input type="text" v-model="store.addPortfolioImageUrl" placeholder="Image URL">
        <input type="text" v-model="store.addPortfolioHeading" placeholder="Heading">
        <input type="text" v-model="store.addPortfolioDescription" placeholder="Description">
        <Button text="Add Portfolio"/>
    </form>
</template>
<style scoped lang="scss">
    form{
        padding-inline: 2rem;
        display: flex;
        gap: 1rem;
        margin-block: 1rem;
        input{
            padding: 10px 20px;
        }
    }
</style>
<script>
import { store } from '../store.js'
import Button from './Button.vue'
export default {
    name: 'AddPortfolioForm',
    components:{
        Button,
    },
    data() {
        return {
            store,
        }
    },
    methods:{
         
    }
    
}
</script>