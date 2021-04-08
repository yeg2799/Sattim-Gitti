<template>
    <div class="brandCard">
        <div class="card">
            <img
                :src="require(`@/assets/image/brands/${brandPic}.png`)"
                alt=""
                class="brandPic"
            />
        </div>

        <span class="brandName">{{ brandName }}</span>
    </div>
</template>

<script>
export default {
    props: {
        brandName: {
            type: String,
            required: false
        },
        brandPic: {
            type: String,
            default: 'acer'
        }
    }
}
</script>
<style lang="scss" scoped>
.brandCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    .card{
        border: 1px solid #484848;
        display: flex;
        align-items: center;
        padding: 20px;
        border-radius: 20px;
        width: 90%;
        .brandPic{
            width: 100%;
        }
    }

}
</style>
