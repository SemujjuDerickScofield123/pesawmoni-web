<template>
  <div class="main-container">
      <!-- Home page starts here -->
      <div class="home-wrapper">
          <!--Nav bar starts from here-->
         <nav>
           <h1>PESAMONI</h1>
           <router-link to="/pesamoni">Pesamoni</router-link>
           <router-link to="/cashchat">CashChat</router-link>
           <router-link to="/education">Education</router-link>
           <router-link to="/kaatchup">Kaatch-Up</router-link>
           <router-link to="/about-us">About Us</router-link>
           <router-link to="/pricing">Pricing</router-link>
         </nav>
          <!--Nav bar starts from here-->
                  <section class="home-content">
                    <div class="home-img">                      
                       <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                <img src="https://s3.us-east-1.amazonaws.com/victoria-university-elearning/website/images/intro_section_banner/487728ba-e0a1-4c7e-877f-df6e42e1ad86.jpg" class="d-block w-100" alt="...">
                              </div>
                              <div class="carousel-item">
                                <img src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="...">
                              </div>
                              <div class="carousel-item">
                                <img src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="...">
                              </div>
                              <div class="carousel-item">
                                <img src="https://images.pexels.com/photos/7007191/pexels-photo-7007191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="...">
                              </div>
                              <div class="carousel-item">
                                <img src="https://images.pexels.com/photos/3762940/pexels-photo-3762940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="...">
                              </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <!-- <div class="home-content-btn"> -->
                      <div class="the-article">
                          <article>
                              <!-- <h1>PESAMONI</h1> -->
                              <h2>PAYMENTS & E-LEARNING SYSTEMS.</h2>
                              <!-- <p> Over 500,000 cutomers in the communication, payments, e-learning worldwide all use Pesamoni systems on a daily.</p> -->
                          </article>
                          <button>Get started <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span></button>
                          <!-- <button>Learn more</button> -->
                      </div>
                       <!--
                          End of the carousle images at the home page
                         -->
                      <button class="contact-us-btn" @click="contactUs"> <i class="fa fa-envelope-o" aria-hidden="true"></i> Contact us</button>
                    <!-- </div> -->
                  </section>
                  <section class="wavy">
                  <div class="wave wave1"></div> 
                  <div class="wave wave2"></div> 
                  <div class="wave wave3"></div> 
                  <div class="wave wave4"></div> 
                </section>
      </div>
            
      <!-- Home page stops here -->

      <!-- new and stories starts here -->
      <section class="new-stories">
        <h3>Products</h3>
        <h5>Select service of your interest:</h5>
          <router-link to="/pesamoni">PESAMONI</router-link>
          <router-link to="/education">EDUCATION</router-link>
          <router-link to="/cashchat">CASHCHAT</router-link>
          <router-link to="/kaatchup">KAATCH-UP</router-link>
      </section>
      <!-- new and stories starts here -->

      <!-- product and services starts here -->
      <section class="prdts-services">
        <h3>Products & Services</h3>
        <div class="product-service-first-content">
            <div class="product-service-content">
                <img src="https://images.pexels.com/photos/7621142/pexels-photo-7621142.jpeg?auto=compress&cs=tinysrgb&w=750&h=750&dpr=1" alt="">
                <h2>Payment Systems</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur laboriosam dolor accusantium inventore quae aliquid officia aperiam voluptatem eum beatae, ad ea, libero quasi optio temporibus in illum ipsa. Consectetur. </p>
            </div>
            <div class="product-service-content">
                <img src="https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=700&h=750&dpr=1" alt="">
                <h2>E-learning Systems</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati magnam voluptas minus suscipit amet dolor aliquam quibusdam! Officiis inventore sequi suscipit quaerat praesentium odio dolore, culpa tenetur maxime eveniet consequuntur. </p>
            </div>
            <div class="product-service-content">
                <img src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                <h2>Chat Systems</h2>
                <h4>Communicate as you share content and get paid</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore dolor distinctio architecto quasi quidem facilis officia dicta! Maiores accusantium iusto, reiciendis eius placeat non odit commodi ea itaque magnam. </p>
            </div>
            <div class="product-service-content">
                <img src="https://images.pexels.com/photos/6328941/pexels-photo-6328941.jpeg?auto=compress&cs=tinysrgb&w=750&h=750&dpr=1" alt="">
                <h2>Fundraise From Anywhere</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam libero nam enim odit adipisci tenetur, possimus animi eveniet quis magni maiores distinctio voluptas fugiat deleniti saepe qui fuga illo non. </p>
            </div>
        </div>
      </section>
        <!-- products are services ends here -->

        <!-- our business starts from here -->
      <section class="our-business">
        <div class="our-business-container">
            <div class="our-business-content">
                <h2>Our business</h2>
                <p>As a focused software company, we combine the real and the digital worlds and help customers to meet the great challenges of our time..</p>
                <p>Our businesses and other organizations like schools, and the society enjoy the freedom of our vast services from educaion, entertainment, earnings, and many more things, we customers  in the best way possible. The structure is geared toward creating value for customers, creating software with purpose.</p>
                <!-- <button>More</button> -->
            </div>
          </div>
      </section>
        <!-- our business ends from here -->

        <!-- Who we are starts here -->
      <section class="who-we-are">
          <div class="who-we-are-content">
              <h1>Who we are</h1>
              <p>We are a software company focused on education, entertainment, payments, and communication.
              </p>
              <p>
                From more secure communication end to end encyption system, remarkable fun, proven education system of cutting edge technology and secure payments.
              </p>
              <p>
                By combining the real and the digital worlds, we empower our customers to transform their lives, helping them to transform the everyday for billions of people.
              </p>
          </div>
          <div>
              <img src="https://images.pexels.com/photos/5668887/pexels-photo-5668887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
          </div>
          <div class="link-to-about-us">
            <router-link to="/about-us">Show more <i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
          </div>
      </section>
        <!-- Who we are stops here -->
        <!-- footer starts here -->
        <my-footer></my-footer>
        <!-- footer stops here -->   

  </div>
</template>

<script>
import MyFooter from './footer/MyFooter.vue'
export default {
  components:{
    MyFooter
  },
  data(){
    return{

      }
    },
    methods:{
      contactUs(){
        this.$router.push('/contact-us')
      }
    }
  }

</script>

<style scoped>
/*
========================
    Home starts here
========================
    */
.main-container{  
  background-color: whitesmoke;
}
    .home-wrapper{
        background-image: linear-gradient(45deg, #f3874f, #662d91, #1a84c6, #f3874f, #f48e21);
        background-attachment: fixed;
        background-size: 300% 300%;
        animation: color 17s ease-in-out infinite;
        position: relative;
        height: 100vh;
        margin-top: -5rem;      
    }
    @keyframes color{
      0%{
        background-position: 0 50%;
      }
      50%{
        background-position: 100% 50%;
      }
      100%{
        background-position: 0 50%;
      }
    }
    nav{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        z-index: 99999;
        height: 4rem;
        margin-top: 1rem;
        width: 100%;        
      }
      nav a{
        padding: 1rem;
        color: #fff;
      }
      nav a:hover{
        color: #f3874f;
      }
      nav h1{
        margin: 0 6rem 0 2rem;
        color: #fff;
      }
    .home-content{
      margin-top: 4rem;
      display: grid;
      grid-template-columns: 2fr 1fr;
    }
    .contact-us-btn{
      position: fixed;
      right: 0;
      bottom: 0;
      height: 3rem;
    }
    .home-img{
      margin-top: 5.5rem;
    }
  .home-img img {
    height: 70vh;
    width: 90%;
    margin: 4rem 3rem 3rem 1rem;
    
}
    article h1{ 
        font-size: 1.5rem;
    }
    article h2{
        margin-top: 13rem;
        font-size: 3.0rem;
        font-style:arial black;
        font-weight: 600;
    }
    article{
        margin: 1rem 2rem;
        color: black;
    }
    .the-article{
      margin-top: -4.0rem;
    }
    article img{
      height: 17rem;
    }
    button{
        margin: 3rem 2rem;
        padding: 10px 30px;
        border: none;
        border-radius: 5px;
        background-color: #1a84c6;
        position: absolute;
        z-index: 9999;
        color: white;
    }
    button:hover{
        cursor: pointer;
        background: #f3874f;
        color: white;
    }
    #carouselExampleAutoplaying button{
      display: none;
    }
    /*
    ========================
    Home stops here
    ========================
    */  
    /*
    ========================
    New stories starts here
    ========================
    */
    .new-stories{      
      background-color: white;
      height: 15rem;
    }
    .new-stories h3 , .new-stories h5{
      color:#f3874f ;
      margin: 2rem 4rem;
    }
    .new-stories h5{
      color: black;
    }
    .new-stories a{
      font-size:smaller;
      border: 1px solid #1a84c6;
      color: #1a84c6;
      padding: 8px 30px;
      margin: 1rem 1rem 1rem 4rem;
      border-radius: 20px;
    }
    .new-stories a:hover{
      color:#f3874f;
      border: 1px solid #f3874f;
    }

    /* 
    ========================
    New stories stops here
    ========================
    */

    /* 
    =========================================
    Product and services section starts here
    =========================================
    */

    .prdts-services{
      margin: 5rem 0;
      background-color:#ddeef9;
    }
    .prdts-services h3, .prdts-services p,.prdts-services h2, .prdts-services h4 {
      color: #1a84c6;
      margin-left: 3rem;
    }
    .prdts-services h3{
      text-align: center;
      padding: 2rem;
    }
    .prdts-services p, .prdts-services h4{
      color: black;
    }
    .product-service-first-content{
        display: grid;
        grid-template-columns: 1fr 1fr;
        background-color: transparent;
        width: 100%;
    }
    .product-service-content img{
        width: 95%;
        height: 50vh;
        background-color: #f3874f;
        margin-left: 1rem; 
    }
      /* 
    =========================================
    Product and services section ends here
    =========================================
    */

      /* 
    =========================================
    Our Business section starts here
    =========================================
    */
    .our-business{
        background-image: url(https://images.pexels.com/photos/4492129/pexels-photo-4492129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
        height: 90vh;
        background-size: cover;
        background-attachment: fixed;
    }
    .our-business-container{
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, .7);
    }
    .our-business-content{
        top: 2rem;
        left: 1rem;
        bottom: 0;
        color: black;
        width: 20%;
        z-index: 9999;
        background-color: #fff;
    }

    .our-business-content h2{
      color: #f3874f;
    }

      /* 
    =========================================
    Our Business section ends here
    =========================================
    */

      /* 
    =========================================
    Who we are section starts here
    =========================================
    */
    .who-we-are{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        background-color: white;
    }
    .who-we-are img{
        width: 100%;
    }
    .who-we-are-content{
      color: #1a84c6;
      margin-left: 4rem;
 
    }
    .who-we-are-content p{
      color: black;
    }
    a{
      text-decoration: none;
      padding: 4rem;
      font-size: 1.3rem;
    }
    .link-to-about-us a{
      color: #1a84c6;
    }
    .link-to-about-us{
      margin-bottom: 3rem;
    }
      /* 
    =========================================
    Who we are section ends here
    =========================================
    */

    /* .wavy{
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    } */
    .wavy .wave{
        position: absolute;
        bottom: -2rem;
        left: 0;
        width: 100vw;
        height: 95px;
        background: url(../../assets/pesateam/wave.png);
        background-size: 1000px 100px;
        margin-bottom: 1rem;
    }
    .wavy .wave.wave1{
        animation: animate 10s linear infinite;
        z-index: 1000;
        opacity: 1;
        animation-delay: 0s;
        bottom: 0;
    }
    .wavy .wave.wave2{
        animation: animate2 5s linear infinite;
        z-index: 999;
        opacity: 0.5;
        animation-delay: -5s;
        bottom: 10px;
    }
    .wavy .wave.wave3{
        animation: animate 10s linear infinite;
        z-index: 998;
        opacity: 0.7 ;
        animation-delay: -2s;
        bottom: 20px;
    }
    .wavy.wave.wave4{
        animation: animate2 2s linear infinite;
        z-index: 997 ;
        opacity: 0.2 ;
        animation-delay: -2s;
        bottom: 15px;
    }
    @keyframes animate
    {
        0%{
            background-position-x: 0;
        }
        100%{
            background-position-x: 1000px;
        }
    }
    @keyframes animate2
    {
        0%{
            background-position-x: 0;
        }
        100%{
            background-position-x: -1000px;
        }
    }
</style>