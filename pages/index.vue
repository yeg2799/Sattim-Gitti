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
    <div class="technology">
      <img src="@/assets/image/products/mens_outerwear.jpg" />
      <span class="text">Teknoloji Ürünleri</span>
      <div class="button">
        <button class="techButton">Alışveriş Yap</button>
      </div>
    </div>
        <div class="technology">
      <img src="@/assets/image/products/mens_outerwear.jpg" />
      <span class="text">Teknoloji Ürünleri</span>
      <div class="button">
        <button class="techButton">Alışveriş Yap</button>
      </div>
    </div>
        <div class="technology">
      <img src="@/assets/image/products/mens_outerwear.jpg" />
      <span class="text">Teknoloji Ürünleri</span>
      <div class="button">
        <button class="techButton">Alışveriş Yap</button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/Cards/ProductCard.vue";
import BrandCard from "@/components/Cards/BrandCard.vue";
export default {
  components: {
    ProductCard,
    BrandCard
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .technology {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    .text {
      text-align: center;
      font-size: 20px;
      padding-top: 10px;
    }
    .button{
      text-align: center;
      padding-top: 15px;
    }
    .techButton {
      border: 3px solid black;
      padding: 10px 50px;
    }
  }
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
