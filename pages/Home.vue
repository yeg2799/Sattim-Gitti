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
          themplateImage:"mens_outerwear",
          title:"Teknoloji Ürünleri",
          buttonText:"Daha fazlası için",
          slug:"/product/teknoloji"
        },
        {
          themplateImage:"mens_outerwear",
          title:"Ev Ürünleri",
          buttonText:"Daha fazlası için",
          slug:"/product/ev"
        },
        {
          themplateImage:"mens_outerwear",
          title:"Modaya Dair Herşey",
          buttonText:"Daha fazlası için",
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
}
</style>
