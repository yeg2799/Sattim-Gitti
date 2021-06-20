<template>
    <div class="payment">
        <div class="title">
            <h1>Ödeme Sayfası</h1>
            <span>Ödeme yapmak için formu düzgün bir şekilde doldurunuz</span>
        </div>
    <div class="info container">
        <div class="col-md-6 col-12">
            <div class="userInfo ">
                <h4>Hesap Bilgileri</h4>
                    <div class="mt-4">
                        <input type="text" placeholder="Email adresiniz" class="input">
                        <hr>
                        <input type="tel" placeholder="Telefon numarası" class="input">
                        <hr>
                    </div>

            </div>
            <div class="adress-info">
                <h4>Adres Bilgileri</h4>
                        <textarea class="form-control input" id="exampleFormControlTextarea1" rows="3" > </textarea>
                        <!-- <hr> -->
                        <!-- <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option selected>Şehir Seçiniz</option>
                                <option value="1">Adana</option>
                                <option value="2">Ankara</option>
                                <option value="3">İzmir</option>
                                <option value="3">İstanbul</option>
                        </select> -->
            </div>
        </div>
        <div class="col-md-6 col-12">
            <div class="paymentInfo">
                <h4>Ödeme Bilgileri</h4>
                <div class="mt-4">
                    <input type="text"  placeholder="Kart numaranız" class="input">
                    <hr>
                    <input type="text"  placeholder="Kart üstünde yazan isim" class="input">
                    <hr>
                </div>
                <div class="d-flex justify-content-between">
                    <div>
                        <input type="date" placeholder="aa/yy" class="input">
                        <hr>
                    </div>
                    <div>
                        <input type="tel" placeholder="CVV" class="input">
                        <hr>    
                    </div>
                        </div>
            </div>
            <div class="orderSummary">
                <h5>Sipariş Özeti</h5>
                <div class="d-flex justify-content-between mt-4">
                    <span>Philips 50PUS9432 50"(2)</span>
                    <b>3900₺</b>
                </div>
                <div class="d-flex justify-content-between mt-4">
                    <span>Toplam</span>
                    <b>7800₺</b>
                </div>
                <input type="submit" value="Siparişi Tamamla" class="paymentButton" @click="payment">
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {

    methods:{
        payment(){
            this.$router.push({name:'PaymentResult'})
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables/_breakpoints.scss";
.input {
    border: none;
    outline: none;
}
.payment{
    display: flex;
    flex-direction: column;
    .title{
        text-align: center;
    }
    .info{
        margin: 100px auto;
        display: flex;
        @include bp(tablet){
            flex-direction: column;
            width: 100%;
            align-items: center;
            justify-content: center;
        }
        .paymentInfo{
            @include bp(tablet){
            margin-top: 50px;
        }
        }
        .orderSummary{
            .paymentButton{
                width: 100%;
                padding: 10px;
                background: white;
                margin-top: 2rem;
                &:hover{
                    color: white;
                    background: black;
                }
            }
        }
    }
}
</style>
