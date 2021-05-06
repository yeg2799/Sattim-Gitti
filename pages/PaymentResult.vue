<template>
    <div class="paymentResult">
        <div class="result">
            <img src="@/assets/image/successful.png" alt="" v-if="result" class="image">
            <span class="resultText" v-if="result">Ödemeniz Başarıyla Gerçekleşmiştir.</span>

            <img src="@/assets/image/unsuccessful.png" alt="" v-if="!result" class="image">
            <span class="resultText" v-if="!result">Maalesef Ödemeniz Gerçekleşmemiştir Tekrar Deneyiniz.</span>

            <input class="resultButton" type="submit" value="Anasayfaya Dön" @click="goHome">
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
.result{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    .resultText{
        font-size: 40px;
        font-weight: 600;
    }
    .resultButton{
        width: 40%;
        padding: 20px;
        background: white;
        margin-top: 30px;
        &:hover{
            background: black;
            color: white;
        }
    }
}
</style>