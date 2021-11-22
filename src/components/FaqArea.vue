<template>
  <section class="faq-area pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="faq-accordion">
            <div class="accordion-container-one">
              <div class="ac">
                <h2 class="ac-q accordion__title-text" tabIndex="0">How to purchase our products?</h2>
                <div class="ac-a accordion__content">
                  <p class="accordion__content-desc">
                    Our products can be bought at our retail stores available countrywide <a href="">(Browse Stores)</a>
                    as well as on our <a href = "#" >Website</a>  and <a href = ""> Mobile Apps</a>.
                  </p>
                </div>
              </div>

              <div class="ac accordion__content">
                <h2 class="ac-q accordion__title-text" tabIndex="0">What are our Add-On Services</h2>
                <div class="ac-a">
                  <p class="accordion__content-desc">
                    We provide a <a href=""> 3 year warranty</a> for all our products together with <a href="">After-Sales Services</a>.
                  </p>
                </div>
              </div>

              <div class="ac">
                <h2 class="ac-q accordion__title-text" tabIndex="0">Whats our Return Policy? </h2>
                <div class="ac-a accordion__content">
                  <p class="accordion__content-desc">
                    Gama wants you to be thrilled with your new purchase. However, if you need to return an item, we're here to help.
                  </p>
                  <div class="accordion__content-desc">
                     Choose a Topic <br>
                    <ul class="accordion__content-desc">
                      <li><a href="" >Returns & Refund Policy</a></li>
                      <li><a href="" >How to Return an Item?</a></li>
                      <li><a href="" >Refunds </a></li>
                      <li><a href="" >Additional Information</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="faq-request-quote">
            <span>Keep in Touch</span>
            <form action="#">
              <div class="input-box">
                <input type="text" placeholder="Your Name">
              </div>
              <div class="input-box">
                <input type="email" placeholder="Email Address">
              </div>
              <div class="input-box">
                <input type="text" placeholder="Phone Number">
              </div>
              <div class="input-box">
                <textarea name="#" id="#" cols="30" rows="10" placeholder="Your Message"></textarea>
              </div>
              <div class="input-box">
                <button class="main-btn">Send us your Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "FaqArea",
      mounted() {
        new Accordion('.accordion-container-one');
      }

    }
</script>

<style scoped>
  .ac {
    margin-top: 10px;
    padding: 10px;
    background: #FFFFFF;
    box-sizing: border-box;
  }

  .ac>.ac-q {
    font: bold 15px Oswald, sans-serif;
    padding: 10px 30px 10px 10px;
    text-decoration: none;
    display: block;
    cursor: pointer;
    position: relative;
    margin: 0;
    color: #192437;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
  }

  .ac.is-active .ac-q {
    color: #ff0000 !important;
  }
  .ac>.ac-q::after {
    content: '+';
    text-align: center;
    width: 15px;
    right: 10px;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    position: absolute
  }

  .ac>.ac-a {
    overflow: hidden;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-timing-function: ease;
    transition-timing-function: ease
  }

  .ac>.ac-a p {
    margin: 0;
    padding: 10px;
    color: #545764;
    font-size: 16px;
    line-height: 30px;
    font-weight: 300;
  }
  .ac>.ac-a div {
    margin: 0;
    padding: 10px;
    color: #545764;
    font-size: 16px;
    line-height: 30px;
    font-weight: 300;
  }

  .ac.js-enabled>.ac-a {
    visibility: hidden
  }

  .ac.is-active>.ac-a {
    visibility: visible
  }

  .ac.is-active>.ac-q::after {
    content: '\2013';
    color: #ff0000;
  }
</style>
