<template>
    <div class="header">
        <nuxt-link to="/login" class="login"><span class="title">Hesabım</span></nuxt-link>
        <nuxt-link to="/" class="link"><span class="title">Sattim Gitti</span></nuxt-link>
        <div class="cart"><nuxt-link to="/Cart" class="link"> <span class="cartCount">{{cartCount}}</span><img src="@/assets/icons/svg/cart.svg"/></nuxt-link></div>
    </div>
</template>

<script>
import Button from '@/components/Buttons/Button'
import Input from '@/components/VueInput'
export default {
    components: {
        Button,
        Input
    },
    data(){
        return{
            cartCount:6,
        }
    }
}
</script>
<style lang="scss">
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    .login{
        position: absolute;
        left: 230px;
        color: black;
        text-decoration: none;
    }
    .link{
        color: black;
        text-decoration: none;
    }
    .title {
        font-size: 25px;
        font-weight: 600;
    }
    .cart{
        width: 35px;
        position: absolute;
        right: 230px;
        .cartCount{
            background: black;
            color: white;
            border: 1px solid white;
            padding: 2px 8px;
            border-radius: 100%;
            position: absolute;
            margin: -7px 0px 0px 20px;
        }
    }
}
</style>
