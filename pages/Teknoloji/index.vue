<template>
    <div class="techonologyPage">
        <img src="@/assets/image/products/mens_outerwear.jpg" alt="" />
        <h3 class="title">Teknoloji Ürünleri</h3>
        <span>(10 Ürün)</span>
        <div class="products">
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

<style lang="scss">
    .techonologyPage {
        text-align: center;
        width: 100%;
    }
    .products{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }


</style>
