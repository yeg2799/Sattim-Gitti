<template>
    <div class="productCard">
        <span>{{productDesc}}</span>
        <img src="" alt="" />
        <span></span>
    </div>
</template>
<script>
export default {
    props: {
        productDesc: String,
        productPic: String,
        productPrice: Number
    }
}
</script>
<style lang="scss"></style>
