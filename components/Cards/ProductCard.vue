<template>
        <div class="productCard">
            <img :src="require(`@/assets/image/products/${productPic}.jpg`)" alt="" class="productPic" @click="detailPage"/>
            <h4 class="text">SAMSUNG QE 65Q70T 65" 163 CM 4K UHD SMART QLED TV,DAHİLİ UYDU ALICI</h4>
            <span class="productPrice">{{productPrice}}<p class="price">TL</p></span>
            <span class="addToCard" >Sepete Ekle</span>
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
    },
    methods:{
        detailPage(){
            this.$router.push({name:"ProductDetail"})
        }
    }
}
</script>
<style lang="scss" scoped>
.productCard{
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    margin-bottom: 20px;
    .text{
        font-size: 20px;
        font-weight: 500;
        text-align: center;
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
    .addToCard{
        border: 1px solid black;
        padding: 10px 50px; 
        cursor: pointer;
        font-size: 20px;
        &:hover{
            color: red;
        }
    }
}

</style>
