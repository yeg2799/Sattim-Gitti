<template>
    <div class="promotionCard">
        <img :src="require(`@/assets/image/products/${themplate}.jpg`)" />
        <span class="text">{{title}}</span>
        <div class="button">
            <nuxt-link :to="slug" class="techButton"><span>{{buttonText}}</span></nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        themplate:{
            type:String,
            required:false
        },
        title:{
            type:String,
            require:false
        },
        buttonText:{
            type:String,
            require:false
        },
        slug:{
            type:String,
            require:false
        }
    }
}
</script>

<style lang="scss" scoped>
.promotionCard {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    margin-bottom: 10px;
    .text {
        text-align: center;
        font-size: 20px;
        padding-top: 10px;
    }
    .button {
        text-align: center;
        padding-top: 15px;
    }
    .techButton {
        border: 3px solid black;
        padding: 10px 50px;
        text-decoration: none;
        color: black;
        &:hover{
            background: black;
            color: white;
        }
    }
}
</style>