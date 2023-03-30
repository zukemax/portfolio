<template>
  <div class="home">
    <SidebarView/>
    <ViewPortfolio/>
  </div>
</template>

<script>
// @ is an alias to /src
import { store } from '../store.js'
import ViewPortfolio from './ViewPortfolio.vue'
import SidebarView from './SidebarView.vue'
export default {
  name: 'HomeView',
  components: {
    ViewPortfolio,
    SidebarView
  },
  data(){
    return{
        store,
    }
  },
}
</script>


<style scoped lang="scss">
  .home{
    display: flex;
    gap: 20px;
  }
</style>