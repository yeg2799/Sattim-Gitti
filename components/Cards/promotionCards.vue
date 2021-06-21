<template>
    <div class="promotion-card">
        <div class="promotion-card__image">
            <img :src="require(`@/assets/image/thumbnail/${themplate}`)" width="1440" height="350"/>
        </div>
        <div class="promotion-card__text"><span class="text">{{title}}</span></div>
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
 @import "@/assets/style/variables/_breakpoints.scss";
.promotion-card {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    margin-bottom: 10px;
    .promotion-card__image{
        img{
            border-radius: 10px;
            @include bp(tablet){
                width: 100%;
                height: auto;
                border-radius: 0;
            }
        }

    }

    .promotion-card__text{
        display: flex;
        align-items: center;
        justify-content: center;
        
    .text {
        font-size: 20px;
        padding-top: 10px;
        text-align: center;
    }
    }

    .button {
        text-align: center;
        padding-top: 15px;
    }
    .techButton {
        border: 1px solid black;
        padding: 10px 50px;
        text-decoration: none;
        color: black;
        border-radius: 20px;
        &:hover{
            background: black;
            color: white;
        }
    }
}
</style>