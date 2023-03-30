<template>
    <div class="portfolio">
        <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" alt="">
        <h2>{{portfolio.heading}}</h2>
        <p>{{portfolio.description}}</p>
    </div>
</template>

<style scoped lang="scss">
.portfolio{
    max-width: 350px;
    border: 1px solid red;
    img{
        max-width: 100%;
        width: 100%;
    }
}   
</style>

<script>
export default({
    props:{
        portfolio:Object
    }
})
</script>
