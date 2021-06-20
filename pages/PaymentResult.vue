<template>
    <div class="payment-result">
        <div class="result container">
            <div class="result-success payment" v-if="result">
                <img src="@/assets/image/successful.png" alt=""  class="image">
                <span class="result-text" v-if="result">Ödemeniz Başarıyla Gerçekleşmiştir.</span>
            </div>
            <div class="result-unsuccess payment" v-if="!result">
                <img src="@/assets/image/unsuccessful.png" alt=""  class="image">
                <span class="result-text" v-if="!result">Maalesef Ödemeniz Gerçekleşmemiştir Tekrar Deneyiniz.</span>
            </div>
            <input class="result-button" type="submit" value="Anasayfaya Dön" @click="goHome">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            result:false
        }
    },
    methods:{
        goHome(){
            this.$router.push({name:'Home'})
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables/_breakpoints.scss";
.result{
    .payment{
        display: flex;
        flex-direction: column;
        align-items: center;
        .result-text{
        font-size: 40px;
        font-weight: 600;
        @include bp(tablet){
            text-align: center;
        }
        }
    }

    .result-button{
        width: 100%;
        padding: 20px;
        background: white;
        margin-top: 30px;
        @include bp(tablet){
            margin-bottom: 30px;
        }
        &:hover{
            background: black;
            color: white;
        }
    }
}
</style>