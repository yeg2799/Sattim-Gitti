<template>
    <div class="header">
        <!-- <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-lg-3">
                    <img src="@/assets/ty-logo.svg" alt="" class="logo">
                </div>
                <div class="col-lg-6">
                    <Input placeholder="Ürün,Kategori veya marka ara"/>
                </div>
                <div class="col-lg-3 d-flex">
                    <Button buttonIcon1="user" buttonIcon2="down" buttonText="Giriş Yap" color="orange" class="mr-5"/>
                    <Button buttonIcon1="cart" buttonIcon2="down" buttonText="Sepetim" color="orange"/>
                </div>
            </div>
        </div> -->
        <span class="title">Sattim Gitti</span>
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
    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        font-weight: 600;
    }
}
</style>
