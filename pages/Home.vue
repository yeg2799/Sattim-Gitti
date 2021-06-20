<template>
  <div class="home">
    <div  v-for="card in promotionCard" :key="card">
        <PromotionCard :themplate="card.themplateImage" :title="card.title" :buttonText="card.buttonText" :slug="card.slug"/>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/Cards/ProductCard.vue";
import BrandCard from "@/components/Cards/BrandCard.vue";
import PromotionCard from "@/components/Cards/promotionCards";
export default {
  data(){
    return{
      promotionCard:[
        {
          themplateImage:"technology-banner.jpg",
          title:"Teknoloji Ürünleri",
          buttonText:"Daha fazlası için tıklayınız",
          slug:"/product/teknoloji"
        },
        {
          themplateImage:"home-thumbnail.png",
          title:"Ev Ürünleri",
          buttonText:"Daha fazlası için tıklayınız",
          slug:"/product/ev"
        },
        {
          themplateImage:"mens_outerwear.jpg",
          title:"Modaya Dair Herşey",
          buttonText:"Daha fazlası için tıklayınız",
          slug:"/product/moda"
        }
      ]
    }
  },
  components: {
    PromotionCard,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
