<template>
    <div class="vueInput">
        <input type="text" :placeholder="placeholder"/>
    </div>
</template>

<script>
export default {
    props:{
        placeholder:{
            type:String,
            required:false,
        }
    }
}
</script>

<style lang="scss" scoped>
.vueInput {
    position: relative;
    &::before {
        content: url('@/assets/icons/svg/search.svg');
        position: absolute;
        top: 17px;
        left: 20px;
        width: 35px;
        height: 35px;
    }
    input {
        border: 1px solid gray;
        border-radius: 50px;
        width: 70%;
        height: 70px;
        padding-left: 70px;
        font-size: 25px;
        &:focus{
            outline: none;
        }
    }

}</style
>>
