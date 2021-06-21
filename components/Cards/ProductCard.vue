<template>
        <div class="product-card">
            <div class="product-card__wrap">
            <div class="product-card__desc">
                <span class="text">SAMSUNG QE 65Q70T 65" 163 CM 4K UHD SMART QLED TV,DAHİLİ UYDU ALICI</span>
            </div>
            <div class="product-card__image">
                <img :src="require(`@/assets/image/products/${productPic}.jpg`)" alt="" class="productPic" @click="detailPage"/>
            </div>

            <span class="productPrice">{{productPrice}}<p class="price">TL</p></span>
            <div class="add-card">
                <span class="add-card__text">Sepete Ekle</span>
            </div>
            
            </div>
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
@import "@/assets/style/variables/_breakpoints.scss";
.product-card{
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    border: 1px solid #bfbfbf;
    border-radius: 10px;
    &:hover{
        box-shadow: 3px 3px 3px 3px #bfbfbf;
        .productPrice{
            display: none;
        }
        .add-card{
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #FFECE0;
                padding: 10px 50px; 
                cursor: pointer;
                font-size: 16px;
                width: 60%;
                margin:0 auto;
                border-radius: 10px;
                margin-bottom: 10px;
                background-color:#FFECE0 ;
                color: #FF6000;
        }
    }
    .product-card__desc{
        padding: 30px 20px;
    }
    .productPrice{
        color: #726f81;
        font-size: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        .price{
            font-size: 20px;
        }
    }
    .add-card{
        display: none;

    }
    @include bp(tablet){
        width: 90%;
    }
}

</style>
