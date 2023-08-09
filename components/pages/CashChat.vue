<template>
  <div class="cashchat-container">
    <!-- <div class="home-page">
        <nav>
           <h1>KAATCH-UP</h1>
           <router-link to="/pesamoni">Pesamoni</router-link>
           <router-link to="/cashchat">CashChat</router-link>
           <router-link to="/education">Education</router-link>
           <router-link to="/kaatchup">Kaatch-Up</router-link>
           <router-link to="/about-us">About Us</router-link>
           <router-link to="/pricing">Pricing</router-link>
         </nav>
        <img src="https://play-lh.googleusercontent.com/FoAnu0VW2QwXQCw6G-Pjc-2RHjhaKLUUGQsshxj2f5g50frp1fI2BbH6IBl5PJQ7DOmf" alt="cashchat logo">
        <nav-bar></nav-bar>
      <button class="contact-us-btn" @click="contactUs"> <i class="fa fa-envelope-o" aria-hidden="true"></i> Contact us</button>
    </div> -->
    <div class="home-wrapper">
            <nav>
                <h1>CASH<span>CHAT</span></h1>
                <router-link to="/">Home</router-link>
                <router-link to="/pesamoni">Pesamoni</router-link>
                <router-link to="/cashchat">CashChat</router-link>
                <router-link to="/education">Education</router-link>
                <router-link to="/kaatchup">Kaatch-Up</router-link>
                <router-link to="/about-us">About Us</router-link>
                <router-link to="/pricing">Pricing</router-link>
            </nav>
          <div class="home-content">
            <div class="home-img">
                  <img src="https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=650&h=650&dpr=1" alt="">
            </div>
            <div>
                <article>
                    <h2>Have Unlimited financial services with CASHCHAT</h2>
                    <p>Make your dreams come true when using CASHCHAT services, we have the chat systems, financial systems, investment plan, just few clicks away</p>
                    <button>Get started <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span></button>
                </article>
                    <!-- <button>Learn more</button> -->
            </div>               
            <button class="contact-us-btn" @click="contactUs"> <i class="fa fa-envelope-o" aria-hidden="true"></i> Contact us</button>
            </div>          
        </div>   
    <section class="all-the-cards">
      <!--  start of cards slider -->
      <div class="carousel-cards">
        <h2>About CachChat</h2>
                </div>
                <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row" >
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="my-card1 d-block w-100">
                                    <h2>CashChat community.</h2>
                                    <p>
                                      Cash Chat Limited is a financial technology, Social media and 
                                      Digital Advertising Company with over 500,000 users on both web & Mobile 
                                      App in sub-Saharan region.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="my-card2 d-block w-100">
                                    <h2>CashChat services.</h2>
                                    <p>
                                      Cash Chat started in 2018 with a vision of transforming businesses to dominate digital world with new technology tools which can help grow different 
                                      levels of business and industries and this ranges from hotel and hospitality, 
                                      Telecommunications, Banking, Tours and Travels, Education sector, Health 
                                      sector and many others.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                    <div class="carousel-item">
                    <!-- <img src="..." class="d-block w-100" alt="..."> -->
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="my-card4 d-block w-100">
                                <h2>How it solves the problems?</h2>
                                <p>
                                  By engaging an audience through our platform, we 
                                  have an ability to generate awareness, widen our client’s potential reach-out 
                                  with in their target market, this resulting into an ultimate topline growth.
                                </p>                         
                            </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="my-card3 d-block w-100">
                                <h2>Customer target.</h2>
                                <p>
                                  Our clients are primarily in sub-Saharan region looking to reach out to their 
                                  customers through our platform. We help our clients target, 
                                  advertise and communicate with their ideal clients through our products and 
                                  services embedded within the application
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
                <!--  end of cards slider -->
    </section>
    <section class="other-content">
        <div class="elearning-distance-learning1">
            <img src="https://s3.us-east-1.amazonaws.com/victoria-university-elearning/website/images/intro_section_banner/487728ba-e0a1-4c7e-877f-df6e42e1ad86.jpg" alt="">
            <div class="img-text">
                <h2>E-Learning and Distance learning.</h2>
                <p>
                    CashChat has managed to scale eLearning live video streaming 
                    which can help schools, universities to teach and exchange live 
                    video with students while learning anywhere using the mobile 
                    app at a free cost.
                </p>
            </div>
        </div>
        <div class="digital-wallet">
            <div class="img-text1">
                <h2>Digital Wallet.</h2>
                <p>
                    CashChat has wallet which can help the users make easy 
                    payments anywhere in the sub Saharan region, this has also 
                    been scaled for business payments to receive payments via 
                    Business API for payments and collections.
                </p>
            </div>
            <img src="https://images.pexels.com/photos/6348113/pexels-photo-6348113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
        </div>
        <div class="elearning-distance-learning1">
            <img src="https://images.pexels.com/photos/5077038/pexels-photo-5077038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
            <div class="img-text">
                <h2>CashChat Ads</h2>
                <p>
                    CashChat is the only digital advertising platform that serves 
                    digital Adverts across East African region in form of Text, 
                    Ad Banners, and Interactive video. CashChat connects you to 
                    more engaging audience to grow any business for customer 
                    retention, new business sales and sales growth. Business make 
                    their budgets and target content on the status for engagement 
                    at low extremely low cost.
                </p>
            </div>
        </div>
        <div class="digital-wallet1">
            <div class="img-text1">
                <h2>Video calls & Voice Calls.</h2>
                <p>
                    CashChat has also succeed and eased the way we 
                    communicate with our friends and family, any person 
                    using CashChat can make unlimited video and Voice 
                    calls in HD format.
                </p>
            </div>
            <img src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
        </div>
        <div class="elearning-distance-learning1">
            <img src="https://images.pexels.com/photos/3807769/pexels-photo-3807769.jpeg?auto=compress&cs=tinysrgb&w=400" alt="">
            <div class="img-text">
                <h2>Unlimited group chats and Personal private messaging</h2>
                <p>
                    CashChat has also empowered all those who want easy and secure
                    communication in personal chats at free cost.
                </p>
            </div>
        </div>
        <div class="digital-wallet">
            <div class="img-text1">
                <h2>Investment Plan</h2>
                <p>
                    CashChat partnered with Altx Africa to allow users invest 
                    their money to do equity and stock trading this include 
                    Exchangable Trade funds(ETFs), Bonds and shares. This will 
                    allow users to earn atleast 14-16% per annum for their 
                    investment.
                </p>
            </div>
            <img src="https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=400" alt="">
        </div>
    </section >
    <section class="cashcaht-testimonies">
        <div>
            <video src="../../video/cashchat-video-1.mp4" width="640" height="480" controls></video>
        </div>
        <div class="testimonies-content">
            <h2>Our customer enjoying CashChat calls</h2>
            <p>
                Don't be left out with these amazing offers given by our application, make phones calls, video chats, and all other amazing things, just go download our app from the Google Play Store and start enjoying too.
            </p>
        </div>
    </section>
    <section class="cashcaht-testimonies">
        
        <div class="testimonies-content">
            <h2>All what you need to know about CashChat</h2>
            <p>
                A detailed video of CashChat, from all the servces to benefits. Change the way you think of social media, it's not only for having fun but also for earning.  
            </p>
        </div>
        <div>
            <video src="../../video/caashchat-description.mp4" width="640" height="480" controls></video>
        </div>
    </section>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from './footer/MyFooter.vue';
// import NavBar from './NavBar.vue';
export default {
  components:{
    MyFooter,
    // NavBar
  },
  methods:{
      contactUs(){
        this.$router.push('/contact-us')
      }
    }
}
</script>

<style scoped>
.cashchat-container{
  background-color: whitesmoke;
  overflow: hidden;
}
.home-wrapper{
        background-image: linear-gradient(45deg,#662d91 ,#662d91, #f3874f,#f3874f );
        background-attachment: fixed;
        background-size: 200% 200%;
        animation: color 17s ease-in-out infinite;
        position: relative;
        height: 110vh;
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
        color: #662d91;
      }
      span{
          color: greenyellow;
      }
      a{
      text-decoration: none;
      padding: 4rem;
      font-size: 1.3rem;
    }
    .home-content{
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 4rem;
      width: 100vw;
    }
    .home-img{
      margin: 6rem 2rem 3rem 3rem;
    }
    article h1{ 
        font-size: 1.5rem;
    }
    article h2{
        width: 23rem;
        font-size: 2.8rem;
        font-style: oblique;
    }
    article p{
        width: 23rem;
    }
    article{
        margin: 8rem;
        color: black;     
        top: 0;
    }
    article img{
        height: 6rem;
    }
    .contact-us-btn{
        margin: 3rem;
        padding: 10px 30px;
        border: none;
        border-radius: 5px;
        background-color: #1a84c6;
        position: fixed;
        right: 0;
        bottom: 0;
        z-index: 9999;
        color: white;
    }
    .contact-us-btn:hover{
        cursor: pointer;
        background: #f3874f;
    }
    article button{
        padding: 10px 30px;
        border: none;
        border-radius: 5px;
        background-color: #f3874f;
        position: absolute;
        z-index: 9999;
    }
    article button:hover{
        cursor: pointer;
        background: #f3874f;
        color: white;
    }
.forth-section{
width: 100vw;
height: 60vh;
margin-top: 2rem;
margin-bottom: 3rem;
}
.forth-section h2, .forth-section p {
    margin: 0  0 1rem 2rem;
}
.carousel-cards h2{
    text-align: center;
    color: #662d91;
}
.carousel-cards h2, .carousel-cards p{
    margin: 0  0 1rem 2rem;
}
.sliding-cards{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}
.sliding-cards .my-card1, .sliding-cards .my-card2, .sliding-cards .my-card3, .sliding-cards .my-card4 {
    width: 35rem;
    height: 15rem;
    background-color: rgb(245, 204, 211);
    margin-left: 2rem;
    margin-right:1rem ;
    padding-right: 1rem ;
    border-radius: 10px;
}
.carousel-item .my-card1, .carousel-item .my-card2, .carousel-item .my-card3, .carousel-item .my-card4 {
    width: 35rem;
    height: 15rem;
    background-color: rgb(245, 204, 211);
    margin-left: 2rem;
    margin-right:1rem ;
    padding-right: 1rem ;
    border-radius: 10px;
}
.carousel-item .my-card2{
    background-color: rgb(245, 245, 173);
}
.carousel-item .my-card3{
    background-color:rgb(141, 247, 247);
}
.carousel-item .my-card4{
    background-color: rgb(195, 195, 241);
}
.carousel-inner{
    /* display: flex; */
    width: 100vw;
}
.carousel-item h2, .carousel-item p {
    margin-left: 1.5rem;
}
.carousel-item h2{
    padding-top: 1.5rem;
}
.carousel button .carousel-control-prev-icon, .carousel button .carousel-control-next-icon  {
    background-color:grey
}
.carousel-control-prev{
    color: black;
}
.sliding-cards .my-card2{
    background-color: rgb(245, 245, 173);
    margin: 0 2rem 2rem 0;
    
}
.sliding-cards .my-card3{
    background-color:rgb(141, 247, 247);

}
.sliding-cards .my-card4{
    background-color: rgb(195, 195, 241);
    margin: 0 2rem 1rem 0;
}
.my-card1 h2, .my-card2 h2, .my-card3 h2, .my-card4 h2{
    margin-top: 1.5rem;
}
.sliding-cards p{
    font-size: 15px;
}
.card p:before{
    content:"• ";
    padding: 5px;
    font-size: 20px;
}
.card h2{
    color: black;
}
/* 
===============================
other content starts here
===============================
*/
.other-content{
    margin-top: 4rem;
}
.other-content h2, .other-content p{
    color: #662d91;
}
.elearning-distance-learning, .digital-wallet, .digital-wallet1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.elearning-distance-learning img, .digital-wallet img{
    width: 17rem;
    margin: 6rem 2rem 3rem 10rem;
}
.img-text{
    margin: 10rem 8rem 0 2rem;
}
.elearning-distance-learning1{
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #662d91;
    height: 60vh;
}
.elearning-distance-learning1 img{
    height: 60vh;
    margin-left: 2rem;
}
.elearning-distance-learning1 .img-text h2, .img-text p {
    color: white;
}

.digital-wallet img{
    margin: 6rem  3rem 3rem 10rem;
}
.digital-wallet1 img{
    margin: 6rem  3rem 3rem 10rem;
    height: 400px;
    width: 550px;
}

.img-text1{
    margin: 10rem 4rem 0 10rem;
}
/* 
===============================
other content stops here
===============================
*/
.cashcaht-testimonies{
    display: grid;
    grid-template-columns: 1fr 1fr ;
}
.cashcaht-testimonies video{
    margin: 3rem;
}
.testimonies-content{
    color: #662d91;
    margin: 10rem 1rem 0 2rem;
}
/* 
===============================
cashcaht-testimonies stops here
===============================
*/

/* 
===============================
cashcaht-testimonies stops here
===============================
*/
</style>