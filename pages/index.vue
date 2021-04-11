<template>
  <div class="home">
    <!-- <div class="container">
      <div class="popularProducts">
        <h1>En çok Satılan Ürünlerimiz</h1>
        <div class="productList">
          <ProductCard
            productDesc="Xiamoi Mi 10T Pro 256GB"
            productPrice="5000"
          />
          <ProductCard productDesc="Açıklama" productPrice="5000" />
          <ProductCard productDesc="Açıklama" productPrice="5000" />
          <ProductCard productDesc="Açıklama" productPrice="5000" />
          <ProductCard productDesc="Açıklama" productPrice="5000" />
          <ProductCard productDesc="Açıklama" productPrice="5000" />
        </div>
      </div>
      <div class="brands">
        <h1>Aradığın Markalar</h1>
        <div class="brandList">
          <BrandCard brandName="Acer" />
          <BrandCard brandName="Acer" />
          <BrandCard brandName="Acer" />
          <BrandCard brandName="Acer" />
          <BrandCard brandName="Acer" />
        </div>
      </div>
    </div> -->
    <PromotionCard themplate="mens_outerwear" title="Teknoloji Ürünleri" buttonText="Daha fazlası için" slug="/teknoloji"/>
    <PromotionCard themplate="mens_outerwear" title="Teknoloji Ürünleri" buttonText="Daha fazlası için" slug="/teknoloji"/>
    <PromotionCard themplate="mens_outerwear" title="Teknoloji Ürünleri" buttonText="Daha fazlası için" slug="/teknoloji"/>
    <PromotionCard themplate="mens_outerwear" title="Teknoloji Ürünleri" buttonText="Daha fazlası için" slug="/teknoloji"/>
  </div>
</template>

<script>
import ProductCard from "@/components/Cards/ProductCard.vue";
import BrandCard from "@/components/Cards/BrandCard.vue";
import PromotionCard from "@/components/Cards/promotionCards";
export default {
  components: {
    ProductCard,
    BrandCard,
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
// .popularProducts {
//   display: flex;
//   flex-direction: column;

//   .productList {
//     display: flex;
//     flex-wrap: wrap;
//     padding-top: 20px;
//   }
// }
// .brands {
//   display: flex;
//   flex-direction: column;
//   .brandList{
//     padding-top: 20px;
//     display: flex;
//     margin-right: 120px;
//   }
// }
</style>
