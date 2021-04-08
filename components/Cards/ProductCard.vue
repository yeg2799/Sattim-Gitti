<template>
    <div class="productCard">
        <span class="productDesc">{{ productDesc }}</span>
        <img :src="require(`@/assets/image/products/${productPic}.png`)" alt="" class="productPic"/>
        <span class="productPrice">{{productPrice}}<p class="price">TL</p></span>
    </div>
</template>
<script>
export default {
    props: {
        productDesc: {
            type: String,
            required: false
        },
        productPic: {
            type: String,
            default:"default_product_image"
        },
        productPrice: {
            type: String,
            required: false
        }
    }
}
</script>
<style lang="scss">
.productCard{
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #484848;
    margin-right: 10px;
    border-radius: 10px;
    margin-bottom: 30px;
    .productDesc{
        font-size: 20px;
        font-weight: 500;
        padding: 10px;
        text-align: center;
    }
    .productPic{
        width: 80%;
    }
    .productPrice{
        color: #684EDE;
        font-size: 40px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        .price{
            font-size: 20px;
        }
    }
}

</style>
