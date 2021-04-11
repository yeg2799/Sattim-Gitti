<template>
    <div class="header">
        <nuxt-link to="/" class="link"><span class="title">Sattim Gitti</span></nuxt-link>
        <div class="cart"><img src="@/assets/icons/svg/cart.svg"/></div>
    </div>
</template>

<script>
import Button from '@/components/Buttons/Button'
import Input from '@/components/VueInput'
export default {
    components: {
        Button,
        Input
    }
}
</script>
<style lang="scss">
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
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
    }
}
</style>
