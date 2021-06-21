<template>
    <div class="category-page">
        <div class="category-image" v-if="categoryImage!==''">
            <img :src="require(`@/assets/image/thumbnail/${categoryImage}`)" alt="" width="1440" height="350"/>
        </div>
        <h3 class="title">{{title}}</h3>
        <span>(10 Ürün)</span>
        <div class="product-wrapper">
            <ProductCard productPic="product_samsung_EA2732_tv" productPrice="5000"/>
        </div>
    </div>
</template>

<script>
import ProductCard from '@/components/Cards/ProductCard'
export default {
    components:{
        ProductCard
    },
    data(){
        return{
            title:"",
            categoryImage:"",
        }
    },
    async fetch(){
        switch (this.$route.params.slug) {
            case "teknoloji":
                this.title="Teknoloji Ürünleri"
                this.categoryImage="technology-banner.jpg"
                break;
            case "moda":
                this.title="Moda Ürünleri"
                this.categoryImage="mens_outerwear.jpg"
                break;
            case "ev":
                this.title="Ev & Yaşam"
                this.categoryImage="home-thumbnail.png"
                break;
            case "aksesuar":
                this.title="Saat & Aksesuar"
                this.categoryImage="accessory-banner.jpg"
                break;
            default:
                break;
        }
    }
};

</script>

<style lang="scss" scoped>
    @import "@/assets/style/variables/_breakpoints.scss";
    .category-page {
        text-align: center;
        width: 100%;
    }
    .category-image{
        img{
            @include bp(tablet){
                width: 100%;
                height: auto;
            }
        }
    }
    .product-wrapper{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        @include bp(tablet){
            flex-direction: column;
        }
    }


</style>
