<template>
<div>
    <div class="menu">
        <div v-for="(menu, index) in menuList" :key="index">
                <nuxtLink :to="menu.slug" class="link">
                    <span>{{ menu.title }}</span>
                </nuxtLink>
        </div>
    </div>
    <!-- <div class="menuMobile" >
        <div  v-for="(menu, index) in menuList" :key="index">
            <nuxtLink :to="menu.slug" class="link"><span>{{ menu.title }}</span> </nuxtLink>
        </div>
    </div> -->

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
                {
                    title: 'Kıyafet',
                    slug: '/product/kıyafet',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
    @import "@/assets/style/variables/_breakpoints.scss";
.menu {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
      @include bp(tablet){
            display: none;
        }
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
.menuMobile{
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: black;

    .link{
        color: white;
    }
}
</style>
