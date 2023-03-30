<template>
    <button type="submit" :class="['btn']" >asdasd</button>
</template>


<script>
export default{
    name : 'Button',
}
</script>

<style lang="scss" scoped>
    .btn{
        padding: 10px 20px;
        border-radius: 0.5rem;
        color: #000;
        border: 0;
        font-weight: 500;
        &.is-dark{
            color: #fff;
        }
    }
</style>