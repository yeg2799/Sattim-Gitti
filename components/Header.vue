<template>
    <div class="header">
        <nuxt-link to="/" class="link"><span class="title">Sattim Gitti</span></nuxt-link>
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
    margin-top: 15px;
    .link{
        color: black;
        text-decoration: none;
    }
    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        font-weight: 600;
    }
}
</style>
