<template>
  <div class="about">
    <AddPortfolioForm/>
    <ViewPortfolio :router="$route.path" />
    
  </div>
</template>

<script>
import AddPortfolioForm from '@/components/AddPortfolioForm.vue'
import ViewPortfolio from '@/views/ViewPortfolio.vue'
export default{
  name: 'AddPortfolioView',
  components: {
    AddPortfolioForm,
    ViewPortfolio
  }
}
</script>

