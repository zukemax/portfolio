<template>
    <button type="submit" :class="['btn']" >Add</button>
</template>


<script>
export default{
    name : 'Button',
}
</script>

<style lang="scss" scoped>
    .btn{
        padding: 10px 20px;
        color: #000;
        border: 0;
        font-weight: 500;
        color: #fff;
        background: rgb(8, 91, 159);
    }
</style>