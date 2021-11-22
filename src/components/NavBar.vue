<template>
  <header class="header-area header-3-area">
    <div class="header-top-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="header-top-item">
              <div class="header-info">
                <ul>
                  <li><a href="mailto:info@gama.co.tz?subject=Mail from  our Website"><i class="flaticon-email-2"></i> info@gama.co.tz</a></li>
                  <li><a href="#"><i class="flaticon-call"></i>+255 71 564 4006</a></li>
                </ul>
              </div>
              <div class="social">
                <ul>
                  <li><a href="https://facebook.com/gamainctz"><i class="fa fa-facebook-f"></i></a></li>
                  <li><a href="https://twitter.com/gamainctz"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="https://instagram.com/gamainctz"><i class="fa fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-header-item">
              <div class="main-header-menus  d-flex justify-content-between align-items-center">
                <div class="header-logo">
                  <a href="/"><img src="/assets/images/logo-corporate.png" alt=""></a>
                </div>
                <div class="toggle-btn ml-30 canvas_open">
                  <i @click="mobileToggle = !mobileToggle" class="fa fa-bars"></i>
                </div>
                <div class="header-menu d-none d-lg-block">
                  <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
<!--                    <li><nuxt-link to="/resources">Resources</nuxt-link></li>-->
                    <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div :class="`offcanvas_menu_wrapper ${mobileToggle ? 'active' : ''}`">
              <div class="canvas_close">
                <a @click="mobileToggle = !mobileToggle" href="javascript:void(0)"><i class="fa fa-times"></i></a>
              </div>
              <div id="menu" class="text-left ">
                <ul class="offcanvas_main_menu">
                  <li><nuxt-link to="/">Home</nuxt-link></li>
                  <li><nuxt-link to="/about">About</nuxt-link></li>
                  <!--                    <li><nuxt-link to="/resources">Resources</nuxt-link></li>-->
                  <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
      name: "NavBar",
      data(){
        return {
          mobileToggle: false
        }
      },
    }
</script>

<style scoped>

</style>
