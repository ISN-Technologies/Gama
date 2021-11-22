<template>
    <div>
      <footer class="footer-area">
        <div class="container">
          <div class="footer-main">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="footer-widget mt-30">
                  <div class="footer-title pb-30">
                    <img src="/assets/images/logo-4.png" alt="gama">
                  </div>
                  <div class="footer-about-content">
                    <p>Gama Incorporation Ltd</p>
                    <p>1 Nyalali Curve Masaki,<br> Dar es Salaam, Tanzania</p>
                    <div class="email">
                      <a href="mailto:info@gama.co.tz?subject=Mail from  our Website">info@gama.co.tz</a>
                    </div>
                    <div class="call">
                      <a href="tel:+255715644006">+255 71 564 4006</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="footer-widget mt-30 ml-30">
                  <div class="footer-title pb-20">
                    <h4 class="title">Useful Links</h4>
                  </div>
                  <div class="footer-about-list d-flex">
                    <ul class="mr-70">
                      <li><a href="/"><i class="fa fa-angle-right"></i> Home</a></li>
                      <li><a href="/about"><i class="fa fa-angle-right"></i> About</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> Products</a></li>
                      <li><a href="/contact"><i class="fa fa-angle-right"></i> Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="footer-widget mt-30 ml-30">
                  <div class="footer-title pb-20">
                    <h4 class="title">Resources</h4>
                  </div>
                  <div class="footer-about-list d-flex">
                    <ul class="mr-70">
                      <li><a href="#"><i class="fa fa-angle-right"></i> Services & Warranty</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> Return Policy</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> Shipping & Delivery</a></li>
                      <li><a href="#"><i class="fa fa-angle-right"></i> Secure Payment</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-7">
                <div class="footer-widget footer-news mt-30">
                  <div class="footer-title pb-40">
                    <h4 class="title">Let's Connect</h4>
                  </div>
                  <div class="footer-news-content">
                    <div class="news-item d-flex align-items-left">
                      <div class="news-item-content">
                        <p >We are available on these platforms</p>
                      </div>
                    </div>
                    <div class="news-item d-flex align-items-center mt-20 social">
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
          <div class="footer-copyright align-items-left">
            <p>&copy; Copyright {{new Date().getFullYear()}} Gama Incorporation Ltd. All rights reserved.</p>
          </div>
        </div>
<!--        <div class="footer-shape-1">-->
<!--          <img src="/assets/images/shape/shape-5.png" alt="">-->
<!--        </div>-->
      </footer>

      <div class="go-top-area">
        <div class="go-top-wrap">
          <div class="go-top-btn-wrap">
            <div @click="scrollTop" :class="`go-top go-top-btn ${scrollBtn ? 'active' : ''}`">
              <i class="fa fa-angle-double-up"></i>
              <i class="fa fa-angle-double-up"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "FooterTwo",
      data(){
        return {
          scrollBtn: false
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },

      methods: {

        handleScroll () {

          if (window.scrollY > 70) {
            this.scrollBtn = true
          }
          else if (window.scrollY < 70) {
            this.scrollBtn = false
          }
        },

        scrollTop () {
          window.scrollTo(0, 0);
        }


      }
    }
</script>

<style scoped>

</style>
