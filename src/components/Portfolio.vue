<template>
    <div class="portfolio" :class="[(route?true:false)?'nohover':'']" v-if="route?true:false||portfolio.isChecked">
        <img :src="portfolio.imageUrl" alt="">
        <div class="content" >
            <h2>{{portfolio.heading}}</h2>
            <p>{{portfolio.description}}</p>
        </div>
        <button v-if="route?true:false||!portfolio.isChecked" @click="store.togglePortfolio(portfolio.id)"  :class="[portfolio.isChecked?'active':'','checkList']"><Eye width="35" height="35"/></button>
        <button v-if="route?true:false||!portfolio.isChecked" @click="store.deletePortfolio(portfolio.id)" class="deleteList"><DeleteCircle width="35" height="35"/></button>
    </div>
</template>

<style scoped lang="scss">
    .portfolio{
        overflow: hidden;
        position: relative;
        transition: all 0.5s;
        &:not(.nohover){
            &:hover{
                img{
                    filter: blur(5px);
                    transform: scale(1.4);
                }
                .content{
                    bottom: 0;
                    background: rgba(0,0,0,0.5);
                }
            }
        }
        img{
            transition: all 0.5s;
            max-width: 100%;
            min-width: 350px;
            min-height: 200px;
            object-fit: cover;
            width: 100%;
            display: block;
        }
        &:not(.nohover){
            .content{
                bottom: calc(-100% + 65px);
                transition: all 0.5s;
                height: 100%;
                text-align: left;
                padding: 20px;
                position: absolute;
                left: 0;
                h2{
                    margin-bottom: 0.5rem;
                    color: #fff;
                }
                p{
                    line-height: 1.35rem;
                    color: #fff;
                }
            }
        }
        button{
            border: 0;
            background: transparent;
            transition: all 0.3s;
            padding-inline: 5px;
            &:hover{
                transform: scale(1.1);
                cursor: pointer;
            }
        }
        .checkList{
            color: rgb(203, 203, 203);
            &.active{
                color: rgb(4, 159, 92);
            }
            &:hover{
                transform: scale(1.1);
                cursor: pointer;
                color: rgba(4, 159, 92,0.5);
            }
        }
        
        .deleteList{
            color: rgba(181, 43, 43, 0.802);
        }
    }   
</style>
<script>
import { store } from '../store.js'

import Eye  from 'vue-material-design-icons-size/Eye.vue';
import DeleteCircle  from 'vue-material-design-icons-size/DeleteCircle.vue';
export default({
    components:{
        Eye,
        DeleteCircle
    },
    props:{
        portfolio:Object,
        route: String
    },
    data(){
        return{
            store
        }
    },
})
</script>
