<template>
    <component
        :is="require(`~/assets/icons/svg/${icon}.svg?inline`)"
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
