<template>
  <div class="login">
        <div class="title">
          <h1>Giriş Yap</h1>
        </div>
        <div class="form">
          <input type="text" class="input" placeholder="E-posta adresi" /> 
          <hr class="line">
          <div class="password">
            <input type="password" class="input password" placeholder="Şifre" />
            <img src="@/assets/icons/svg/lookPassword.svg" alt="" class="lookPassword" title="parolayı görmek için tıklayınız">
          </div>
          
          <hr class="line">
          <div ><nuxt-link :to="{name:'forgetPassword'}" class="forgetMyPassword"> Şifremi Unuttum</nuxt-link></div>
          <div class="buttons">
          <span class="button">Giriş Yap</span>
          <nuxt-link to="/register"  class="button">Kayıt ol</nuxt-link>
        </div>
        </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login{
  display: flex;
  flex-direction: column;
  align-items: center;

  .title{
    text-align: center;
  }
  .password{
    .lookPassword{
      width: 30px;
      cursor: pointer;
    }
  }
  .form{  
    position: relative;
    margin-top: 150px;
    .input{
      width: 360px;
      border: 0px;
      outline: none;
    }
    .line{
      width: 400px;
    }

    .forgetMyPassword{
    font-weight: 600;
    position: absolute;
    right: 0px;
    color: black;
    text-decoration: none;
    cursor: pointer;
    &:hover{
      color: red;
    }
  }
  .buttons{
    margin-top: 80px;
    display: flex;
    justify-content: space-around;
    .button{
      color: black;
      cursor: pointer;
      text-decoration: none;
      border: 1px solid black;
      padding: 10px 67px;
      border-radius: 5px;
      &:hover{
        background: black;
        color: white;
      }
    }
  }
  }
}
</style>
