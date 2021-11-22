<template>
  <section class="top-products-area">
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col-lg-12">
          <div class="top-products-title text-center">
            <h3 class="title">Top Products</h3>
          </div>
        </div>
      </div>
      <div class="row top-products-active">
        <swiper :options="swiperOptions">
          <swiper-slide>
          <div class="top-products-item mt-30">
            <div class="top-products-thumb">
              <img src="/assets/images/allinone.jpg" alt="projects">
            </div>
            <div class="top-products-content">
              <a href="#"><span>All in One</span></a>
              <p>Computers & Laptops</p>
            </div>
          </div>
          </swiper-slide>
<!--          <swiper-slide>-->
<!--          <div class="top-products-item mt-30">-->
<!--            <div class="top-products-thumb">-->
<!--              <img src="/assets/images/3phase1.jpg" alt="projects">-->
<!--            </div>-->
<!--            <div class="top-products-content">-->
<!--              <a href="#"><span>3 Phase Meter</span></a>-->
<!--              <p>Smart Meters</p>-->
<!--            </div>-->
<!--          </div>-->
<!--          </swiper-slide>-->
          <swiper-slide>
          <div class="top-products-item mt-30">
            <div class="top-products-thumb">
              <img src="/assets/images/laptop1.jpg" alt="projects">
            </div>
            <div class="top-products-content">
              <a href="#"><span> Laptop</span></a>
              <p>Computers & Laptops</p>
            </div>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div class="top-products-item mt-30">
            <div class="top-products-thumb">
              <img src="/assets/images/router1.jpg" alt="projects">
            </div>
            <div class="top-products-content">
              <a href="#"><span>Router</span></a>
              <p>Networking Solutions</p>
            </div>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div class="top-products-item mt-30">
            <div class="top-products-thumb">
              <img src="/assets/images/serv.jpg" alt="projects">
            </div>
            <div class="top-products-content">
              <a href="#"><span>Rack Server</span></a>
              <p>Data Solutions</p>
            </div>
          </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: "TopProducts",
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView : 3,
          loop: true,
          speed: 1000,
          spaceBetween : 30,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },
          // Responsive breakpoints
          breakpoints: {
            1024:{
              slidesPerView : 3
            },
            768:{
              slidesPerView : 2
            },
            640:{
              slidesPerView : 1
            },
            320:{
              slidesPerView : 1
            }
          }
        }
      }
    },
  }
</script>

<style scoped>

</style>
