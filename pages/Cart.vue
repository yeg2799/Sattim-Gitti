<template>
  <div class="cart">
        <div class="title">
          <h1>Sepetiniz</h1>
          <p>({{products.length}} Ürün)</p>
        </div>
        <div class="container">
        <div class="products" v-for="product in products" :key="product.id">
          <div class="product-image">
            <img alt="" class="productImage"  :src="require(`@/assets/image/products/${product.image}`)">
          </div>
          <div class="d-flex product-center">
          <div class="product-title">
            <h4>PHILIPS 50PUS8505 50"</h4>
          </div>
            <div class="product-piece">
            <div @click="product.orderPiece>0 ? product.orderPiece--:''">
              <img src="@/assets/icons/svg/minus.svg" alt="" class="icon" />
            </div>
              <span class="product-piece__text">{{product.orderPiece}}</span>
              <div @click="product.orderPiece++">
                <img src="@/assets/icons/svg/plus.svg" alt="" class="icon"/>
              </div>
          </div>
                    <div class="product-price">
              <span>{{product.orderPiece*product.orderPrice}}TL</span>
          </div>
          </div>
          <div class="delete-product">
              <img src="@/assets/icons/svg/multiplication.svg" alt="" class="icon"/>
          </div>

        </div>
          <div class="payment">
          <div class="payment-text">
            <h5>Ödenecek Tutar:</h5>
            <span> {{totalPrice}}TL</span>
          </div>
          <div class="goPayment" @click="payment">
            <span>Ödemeye Geç</span> 
          </div>
        </div>
        </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      products:[
        { 
          id:1,
          image:"product_samsung_EA2732_tv.jpg",
          title:"PHILIPS 50PUS8505 50",
          orderPiece:1,
          orderPrice:4000,
        },
        { 
          id:2,
          image:"product_samsung_EA2732_tv.jpg",
          title:"PHILIPS 50PUS8505 50",
          orderPiece:2,
          orderPrice:4000,
        },
      ]
    }
  },
  computed:{
    totalPrice(){
      let total=0
      this.products.forEach(element => {
          total +=  element.orderPiece*element.orderPrice;
      });
      return total
    }
  },
  methods:{
  payment(){
    this.$router.push({name:"ProductPayment"})
  }
}
}
</script>

<style lang="scss" scoped>
 @import "@/assets/style/variables/_breakpoints.scss";
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
    justify-content: space-between;
    margin-bottom: 70px;
    align-items: center;

    .productImage{
      width: 150px;
    }
    .icon{
      width: 25px;
      cursor: pointer;
    }
    .product-center{
      @include bp(tablet){
        flex-direction: column;
      }
      .product-piece{
        display: flex;
        padding: 0 20px;
        
      @include bp(tablet){
        padding: 0;
      }
    .product-piece__text{
      padding: 0 20px;
    }
  }
    }
  }

  .payment{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .payment-text{
      display: flex;
      flex-direction: column;
      color: #04A2CA;
          h5{
            color: #000;
          }
    }

    .goPayment{
      border: 1px solid #04A2CA;
      padding: 10px;
      margin-left: 50px;
      cursor: pointer;
      border-radius: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #04A2CA;
      color: white;
      span{
        font-size: 18px;
        font-weight: 500;

      }
      &:hover{
        background: #fff;
        color: #04A2CA;
      }
    }
  }
}
</style>