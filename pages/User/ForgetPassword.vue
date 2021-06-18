<template>
    <div class="forgetPassword">
        <h1 class="title text-center mt-3">Hesabımı Bul</h1>
        <div class="forget mt-5">
            <input type="text" class="input" placeholder="Adınızı veya Email adresinizi giriniz">
            <hr>
        </div>
        <div class="forgetButton">
            <input type="submit" value="Şifremi Unuttum" class="forgetInput">
        </div>
        <span class="text">
            <b>Not:</b> Hesabınıza kayıt olduğunuz Email adresinizi yazıp şifremi unuttum butonuna tıklayınız size gönderdiğimiz şifre yenileme linki ile şifrenizi değiştirebilirsiniz.
        </span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.forgetPassword{
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 0 auto;
}
.forget{
        .input{
            border: none;
            outline: none;
            font-size: 20px;
            width: 90%;
        }   
}

    .forgetButton{
        .forgetInput{
            width: 100%;
            padding: 20px;
            background: white;
        }
}
.text{
    margin-top: 60px;
    font-size: 20px;
}
</style>