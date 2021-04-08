<template>
    <div class="button">
        <div class="buttons" :class="color">
            <img
                v-if="buttonIcon1"
                v-lazy-load
                :src="require(`@/assets/icons/svg/${buttonIcon1}.svg`)"
                alt=""
                class="icon"
                width="25px"
                height="25px"
            />
            <svg-sprite :icon="buttonIcon1"/>
            <span class="buttonText">{{ buttonText }}</span>
            <img
                v-if="buttonIcon2"
                v-lazy-load
                :src="require(`@/assets/icons/svg/${buttonIcon2}.svg`)"
                alt=""
                class="iconDown"
                width="25px"
                height="25px"
            />
        </div>
    </div>
    <!-- <component
        :is="component"
        :to="to"
        class="button"
        :disabled="isLoading"
        @click="clickButton"
    >
        <span v-if="!isLoading" class="button__wrp">
            <span v-if="icon && iconPosition === 'left'" class="button__icon">
                <svg-sprite :icon="buttonIcon1" />
            </span>
            <span
                v-if="imageIcon && iconPosition === 'left'"
                class="button__icon"
            >
                <img v-lazy-load :src="imageIcon" class="icon" />
            </span>
            <span v-if="title" class="button__text">
                {{ title }}
            </span>
            <span v-if="icon && iconPosition === 'right'" class="button__icon">
                <svg-sprite :icon="icon" />
            </span>
            <span
                v-if="imageIcon && iconPosition === 'right'"
                class="button__icon"
            >
                <img v-lazy-load :src="imageIcon" class="icon" />
            </span>
        </span>
        <span v-if="isLoading">
            Yükleniyor...
        </span>
    </component> -->
</template>

<script>
import SvgSprite from '../SvgSprite.vue'
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
        color: String,
        icon: String,
        imageIcon: [String, Object],
        component: {
            type: String,
            default: 'button'
        },
        title: String,
        to: [String, Object],
        iconPosition: {
            type: String,
            default: 'left'
        },
        isLoading: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/variables/_breakpoints';
:root {
    --green: #5ac794;
    --orange: #FF671D;
    --purple: #684ede;
}
.green {
    background-color: var(--green);
}
.orange {
    background-color: var(--orange);
}
.purple {
    background-color: var(--purple);
}

.button {
    cursor: pointer;
    .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 50px;
        color: white;
    }
    .buttonText {
        text-align: center;
        font-size: 25px;
    }
    .icon {
        margin-right: 10px;
        stroke: white;
    }
    .iconDown {
        display: flex;
        margin-left: 5px;
        margin-top: 5px;
    }
}
</style>
