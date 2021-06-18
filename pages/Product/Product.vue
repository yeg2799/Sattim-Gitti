<template>
    <div class="techonologyPage">
        <img src="@/assets/image/thumbnail/mens_outerwear.jpg" alt="" />
        <h3 class="title">Teknoloji Ürünleri</h3>
        <span>(10 Ürün)</span>
        <div class="product-wrapper">
            <ProductCard productPic="product_samsung_EA2732_tv" productPrice="5000"/>
            <ProductCard productPic="product_samsung_EA2732_tv" productPrice="5000"/>
            <ProductCard productPic="product_samsung_EA2732_tv" productPrice="5000"/>
            <ProductCard productPic="product_samsung_EA2732_tv" productPrice="5000"/>
            <ProductCard productPic="product_samsung_EA2732_tv" productPrice="5000"/>
            <ProductCard productPic="product_samsung_EA2732_tv" productPrice="5000"/>
            <ProductCard productPic="product_samsung_EA2732_tv" productPrice="5000"/>
            <ProductCard productPic="product_samsung_EA2732_tv" productPrice="5000"/>
        </div>
    </div>
</template>

<script>
import ProductCard from '@/components/Cards/ProductCard'
export default {
    components:{
        ProductCard
    }
};

</script>

<style lang="scss" scoped>
    @import "@/assets/style/variables/_breakpoints.scss";
    .techonologyPage {
        text-align: center;
        width: 100%;
    }
    .product-wrapper{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        @include bp(tablet){
            flex-direction: column;
        }
    }


</style>
