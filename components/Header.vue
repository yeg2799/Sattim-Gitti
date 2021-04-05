<template>
    <div class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    Logo
                </div>
                <div class="col-lg-6">
                    Search
                </div>
                <div class="col-lg-3">
                    <Button buttonIcon1="user" buttonText="Giriş Yap" color="green"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../components/Buttons/Button'
export default {
    components:{
        Button
    }
};
</script>
<style lang="scss">
.header{
    
}
</style>
