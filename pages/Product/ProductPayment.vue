<template>
    <div class="payment">
        <div class="title">
            <h1>Ödeme Sayfası</h1>
            <span>Ödeme yapmak için formu düzgün bir şekilde doldurunuz</span>
        </div>
    <div class="info">
        <div class="leftPart">
            <div class="userInfo">user</div>
            <div class="adressInfo">adress</div>
        </div>
        <div class="rightPart">
            <div class="paymentInfo">payment</div>
            <div class="orderSummary">order</div>
        </div>
    </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.payment{
    display: flex;
    flex-direction: column;
    .title{
        text-align: center;
    }
    .info{
        width: 75%;
        margin: 0 auto;
        display: flex;
        border: 1px solid black;
    }
}
</style>
