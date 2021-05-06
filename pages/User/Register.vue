<template>
<div class="register">
    <div class="title text-center mt-3">
        <h1>Kayıt Ol</h1>
    </div>
    <div class="form mt-5">
        <div class="d-flex justify-content-between">
            <div class="nameInput col-5">
                <input type="text" class="input name" placeholder="Adınız">
                <hr class="line">
            </div>
            <div class="surnameInput col-5">
                <input type="text" class="input surname" placeholder="Soyadınız">
                <hr class="line">
            </div>
        </div>
        <div>
            <input type="text" class="input" placeholder="E-posta adresi" /> 
            <hr class="line">
        </div>
        <div class="password">
            <input type="password" class="input" placeholder="Şifre" /> 
            <img src="@/assets/icons/svg/lookPassword.svg" alt="" class="lookPassword" title="parolayı görmek için tıklayınız">
            <hr class="line">
        </div>
        <div class="check d-flex">
            <input type="checkbox" name="" id="" class="checkbox">
            <span class="checkText">Önemli kampanyalardan haberdar olmak için Rıza Metni kapsamında elektronik ileti almak istiyorum.</span>
        </div>
        <div class="">
            <input type="submit" value="Üye Ol" class="registerButton">
        </div>
        <div class="infoText">
        <span >Kişisel verileriniz, Aydınlatma Metni kapsamında işlenmektedir. “Üye ol” veya “Sosyal Hesap” butonlarından birine basarak Üyelik Sözleşmesi’ni, Rıza Metni’ni, Çerez Politikası’nı okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.</span>
        </div>
    </div>

</div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.register{
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 0 auto;

.password{
    position: relative;
    .lookPassword{
        width: 30px;
        cursor: pointer;
        position: absolute;
        right: 0;
    }
    }
}
.input{
    outline: none;
    border: none;
    width: 90%;
}
.checkbox{
    border-radius: 5px;
    width: 80px;
    height: 40px;
    margin-right: 20px;
}
.checkText{
    font-size: 25px;
    font-weight: 600;
}
.registerButton{
    margin-top: 40px;
    background: white;
    width: 100%;
    padding: 20px;
}
.infoText{
    margin-top: 70px;
    font-size: 18px;
}
</style>