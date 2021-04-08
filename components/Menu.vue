<template>
    <div class="Menu">
        <NuxtLink to="/" class="link"><span>Anasayfa</span></NuxtLink>
        <NuxtLink to="/elektronik" class="link"
            ><span>Elektronik</span></NuxtLink
        >
        <NuxtLink to="/moda" class="link"><span>Moda</span></NuxtLink>
        <NuxtLink to="/ev" class="link"><span>Ev</span></NuxtLink>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.Menu {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.link {
    color: black;
    text-decoration: none;
    font-size: 20px;
    padding: 30px;
    &:hover {
        color: red;
    }
}
</style>
