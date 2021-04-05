<template>
    <div class="button" :class="color">
        <div class="buttons">
            <img
                v-if="buttonIcon1"
                v-lazy-load
                :src="require(`@/assets/icons/svg/${buttonIcon1}.svg`)"
                alt=""
                class="icon"
            />
            <span class="buttonText">{{ buttonText }}</span>
            <img
                v-if="buttonIcon2"
                v-lazy-load
                :src="require(`@/assets/icons/svg/${buttonIcon2}.svg`)"
                alt=""
                class="icon"
            />
        </div>
    </div>
</template>

<script>
import SvgSprite from '../SvgSprite'
export default {
    components: { SvgSprite },
    props: {
        buttonIcon1: {
            type: String,
            required: false
        },
        buttonIcon2: {
            type: String,
            required: false
        },
        buttonText: {
            type: String,
            required: true
        },
        color: String
    },
    compontent: {
        SvgSprite
    }
}
</script>
<style lang="scss" scoped>
.button {
    width: 150px;
    cursor: pointer;
    .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid black;
    }
    .icon {
        margin-right:7px;
        width: 20%;
    }
}
</style>
