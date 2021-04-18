<template>
  <div class="cart">
        <div class="title">
          <h1>Sepetiniz</h1>
          <p>(2 Ürün)</p>
        </div>
        <div class="products">
          <img src="@/assets/image/products/product_samsung_EA2732_tv.jpg" alt="" class="productImage">
          <h4>PHILIPS 50PUS8505 50" </h4>
          <span>Adet:2</span>
          <span>3900₺</span>
          <img src="@/assets/icons/svg/multiplication.svg" alt="" class="icon"/>
        </div>
        <div class="products">
          <img src="@/assets/image/products/product_samsung_EA2732_tv.jpg" alt="" class="productImage">
          <h4>PHILIPS 50PUS8505 50" </h4>
          <span>Adet:2</span>
          <span>3900₺</span>
          <img src="@/assets/icons/svg/multiplication.svg" alt="" class="icon"/>
        </div>
        <div class="products">
          <img src="@/assets/image/products/product_samsung_EA2732_tv.jpg" alt="" class="productImage">
          <h4>PHILIPS 50PUS8505 50" </h4>
          <span>Adet:2</span>
          <span>3900₺</span>
          <img src="@/assets/icons/svg/multiplication.svg" alt="" class="icon"/>
        </div>
        <div class="payment">
          <span>Toplam:7800₺</span>
          <div class="button" @click="payment">
            Ödemeye Geç
          </div>
        </div>
  </div>
</template>

<script>
export default {
methods:{
  payment(){
    this.$router.push({name:"ProductPayment"})
  }
}
}
</script>

<style lang="scss" scoped>
.cart{
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 20px;
  .title{
    text-align: center;
  }
  .products{
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 70px;
    .productImage{
      width: 150px;
    }
    .icon{
      width: 25px;
      cursor: pointer;
    }
  }
  .payment{
    display: flex;
    position: absolute;
    align-items: center;
    right: 220px;
    bottom:0px ;

    .button{
      border: 3px solid black;
      padding: 10px;
      margin-left: 50px;
      cursor: pointer;
      &:hover{
        background: black;
        color: white;
      }
    }
  }
}
</style>