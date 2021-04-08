<template>
  <div v-swiper:options="swiperOption" class="hero-slider">
    <!-- slides -->
    <div class="swiper-wrapper">
      <div v-for="item in slider" :key="item.id" class="swiper-slide">
        <div class="hero-slider__title">
          {{ item.title }}
          <!-- <div class="colored">tam zamanı!</div> -->
        </div>
        <div class="hero-slider__text">
          {{ item.descr }}
        </div>
        <div class="hero-slider__tags">
          <span class="hero-slider__tag">{{ item.tag }}</span>
        </div>
        <img v-lazy-load :src="item.pic" alt="" class="hero-slider__img">
      </div>
    </div>
    <!-- Optional controls -->
    <div slot="pagination" class="hero-slider-pagination" data-hero-slider-pagination />
  </div>
</template>

<script>
export default {
  name: 'HeroSlider',
  props: {
    slider: Array,
  },
  data() {
    return {
      swiperOption: {
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        autoplay: {
          delay: 5000,
        },
        loop: true,
        pagination: {
          el: '[data-hero-slider-pagination]',
          clickable: true,
        },
      },
    };
  },
  methods: {
    initSwiper() {
      console.log('init');
    },
  },
};
</script>



<style lang="scss">
@import "@/assets/style/home/hero-slider.scss";
.hero-slider {
  &-pagination {
    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      display: inline-block;
      border-radius: 100%;
      background: none;
      opacity: 1;
      border: 1px solid #4b9eff;
      transition: all .3s ease-in-out;
    }
    .swiper-pagination-bullet-active {
      opacity: 1;
      background: #ffc66e;
      border-color: transparent;
    }
  }
}
</style>
