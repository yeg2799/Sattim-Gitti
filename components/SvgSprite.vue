<template>
    <component
        :is="require(`@/assets/icons/svg/${icon}.svg`)"
        class="icon"
    />
</template>
<script>
export default {
    name: 'SvgSprite',
    props: {
        icon: String
    }
}
</script>
