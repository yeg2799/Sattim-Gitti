<template>
    <div class="Menu">
        <div v-for="(menu, index) in menuList" :key="index">
            <NuxtLink :to="menu.slug" class="link"
                ><span>{{ menu.title }}</span></NuxtLink
            >
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuList: [
                {
                    title: 'Anasayfa',
                    slug: '/',
                },
                {
                    title: 'Teknoloji',
                    slug: '/product/teknoloji',
                },
                {
                    title: 'Moda',
                    slug: '/product/moda',
                },
                {
                    title: 'Ev',
                    slug: '/product/ev',
                },
            ],
        }
    },
}
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
