<template>
  <div class="pesamoni-container">
    <div class="home-wrapper">
            <nav>
                <h1>PESAMONI</h1>
                <!-- <img width="100%" height="100%" src="https://res.cloudinary.com/african-centre-for-peace-and-human-life/image/upload/v1526376738/Pesamoni/Nav-logo.png" alt="Nav logo"> -->
                <router-link to="/">Home</router-link>
                <router-link to="/pesamoni">Pesamoni</router-link>
                <router-link to="/cashchat">CashChat</router-link>
                <router-link to="/education">Education</router-link>
                <router-link to="/kaatchup">Kaatch-Up</router-link>
                <router-link to="/about-us">About Us</router-link>
                <router-link to="/pricing">Pricing</router-link>
                <router-link to="/login">Login</router-link>
            </nav>
          <div class="home-content">
              <div class="home-card">
                <h1>PesaMoni, signup and start sending money with ease</h1>
                <button>Register</button>
              </div>
            <button class="contact-us-btn" @click="contactUs"> <i class="fa fa-envelope-o" aria-hidden="true"></i> Contact us</button>
            </div>           
        </div>
        <!-- section for pesa-phone-shot starts here -->
        <section class="pesa-phone-shot">
            <div class="image-container">
                <img src="https://res.cloudinary.com/african-centre-for-peace-and-human-life/image/upload/v1526375823/Pesamoni/landing-page-interface-screen.png" alt="pesamoni phone shot" class="centered-image">
            </div>
            <div class="pesamoni-phone-shot-content">
                <h3>The PesaMoni App</h3>
                <p>Make seamless transactions on spot, with the PesaMoni App.</p>
                <a href=""><img src="https://res.cloudinary.com/african-centre-for-peace-and-human-life/image/upload/v1526381204/Pesamoni/get_it.png" alt="playstore-logo"></a>
            </div>
        </section>  
        <!-- section for pesa-phone-shot ends here -->

        <!-- section for transactions ends here -->
        <section class="transactions">
            <div class="transaction-content">
                <h4>With our platform, transactions have been made easier.</h4>
                <p>Simply choose an account of your choice and enjoy the no hustle.</p>
            </div>
            <div class="cards">
                <div class="card1">
                    <h4>Personal Account</h4>
                    <div class="icon">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <button>Get Started</button>
                </div>
                <div class="card2">
                    <h4>Business Account</h4>
                    <div class="icon">
                        <i class="fa fa-briefcase" aria-hidden="true"></i>
                    </div>
                    <button>Get Started</button>
                </div>
            </div>
            
        </section>
        <!-- section for transactions ends here -->

        <!-- section for more-content ends here -->
        <section class="more-info">
            <div class="more-content">
                <img src="https://res.cloudinary.com/african-centre-for-peace-and-human-life/image/upload/v1526376739/Pesamoni/pesacard-full.png" alt="pesamoni card">
                <div class="more-content-wording">
                    <h4>With PesaMoni comes simplicity</h4>
                    <p>Use the PesaCard to fund your wallet anytime.</p>
                    <button>Find Out More</button>
                </div>
            </div>
            <div class="more-info-img">
                <!-- <img src="https://res.cloudinary.com/african-centre-for-peac…mage/upload/v1526380510/Pesamoni/rohit-tandon.png" alt=""> -->
            </div>
        </section>
        <!-- section for more-content ends here -->

        <!-- section for more information about -->
        <my-footer></my-footer> 
  </div>
</template>

<script>
import MyFooter from './footer/MyFooter.vue';
export default {
    components:{
        MyFooter
    },
    methods:{
        contactUs(){
          this.$router.push('/contact-us')
        }
      }
}
</script>

<style scoped>
    .pesamoni-container{
    background-color: #fff;
    overflow-x: hidden;
  }
  /* 
  ===============
  home starts here
  ===============
  */
  .home-wrapper{
        background-image: url(https://res.cloudinary.com/african-centre-for-peace-and-human-life/image/upload/v1526375765/Pesamoni/another-hero.png);
        background-size: cover;
        position: relative;
        min-height: 120vh;
        margin-top: -5rem;  
    }
    nav{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        /* background-color: rgb(251, 91, 91); */
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
        color: #1a84c6;
      }
      nav h1{
        margin: 0 6rem 0 2rem;
        color: #1a84c6;
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
      position: relative;
    }
    .home-card{
        position: absolute;
        top: 20rem;
        left: 5rem;
    }
    .home-card h1{
        text-align: center;
        width: 30rem;
        color: #fff;
        font-weight: 200;
    }
    .home-card button{
        margin-left: 3rem;
        width: 10rem;
        background: #1a84c6;
        color: #fff;
    }
    .contact-us-btn{
      position: fixed;
      right: 0;
      bottom: 0;
      height: 3rem;
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
        /* position: absolute; */
        color: black;     
        top: 0;
    }
    article img{
        height: 6rem;
        /* background-color: whitesmoke; */
    }
    button{
        padding: 10px 30px;
        border: none;
        border-radius: 5px;
        background-color: #f3874f;
        position: absolute;
        z-index: 9999;
    }
    button:hover{
        cursor: pointer;
        background: #f3874f;
        color: white;
    }
  .home-page h1{
      position: fixed;
      top: 0;
      left: 0;
  }
  .contact-us-btn{
          margin: 3rem;
          padding: 10px 30px;
          border: none;
          border-radius: 5px;
          background-color: #428bca;
          position: fixed;
          right: 0;
          bottom: 0;
          z-index: 9999;
          color: white;
      }
      .contact-us-btn:hover{
          cursor: pointer;
          background: rgb(241, 174, 50);
          color: #428bca;
      }
      /* 
      =====================
      home ends here
      =====================
      */

      /* 
      ================================
      pesamoni-phone-shot starts here
      ================================
      */
      .pesa-phone-shot{
          background: #fff;
          height: 75vh;
          display: grid;
          grid-template-columns:2fr 1fr;
      }
      .image-container{
          display: flex;
          justify-content: center;
          margin-bottom:3rem ;
      }
      .centered-image{
          max-width: 100%;
          margin-top: 4rem;
      }
      .pesamoni-phone-shot-content{
          margin: 10rem 10rem 10rem -10rem;
      }
      .pesamoni-phone-shot-content a{
          margin-left: -3.7rem;
      }
      /* 
      ================================
      pesamoni-phone-shot ends here
      ================================
      */

      /* 
      ===========================================
      section for transactions ends here ends here
      ==========================================
      */
      .transactions{
          background: whitesmoke;
      }
      .transaction-content{
          text-align: center;
          padding: 3rem;
      }
      .cards{
          display: grid;
          grid-template-columns: 1fr 1fr;
      }
      .card1, .card2{
          background-color:#fff;
          width: 20rem;
          height: 20rem;
          margin: 4rem;
          text-align: center; 
          box-shadow: 10px 10px 5px  rgb(209, 239, 248);
      }
      .card1 h4, .card2 h4{
          padding: 1rem;
      }
    .icon{
         font-size: 7rem; 
         color: #1a84c6;
      }
      .card1 button, .card2 button{
          margin-left: -4.5rem;
          background-color: #1a84c6;
          color: #fff;
      }
      .card1 button:hover, .card2 button:hover{
        background-color: #f3874f;
      }
      .card1{
        margin-left: 15rem;
      }
      /* 
      ===========================================
      section for transactions ends here ends here
      ===========================================
      */

      /* 
      ===========================================
      section for more info ends here ends here
      ===========================================
      */
      .more-info{
        margin-bottom: 3rem;
      }
      .more-content{
          background-color: #fff;
          display: grid;
          grid-template-columns: 1fr 1fr;
      }
      .more-content img{
          margin: 5rem 0 5rem 0;
      }
      .more-content-wording{
          margin: auto;
      }
      .more-content-wording button{
        background-color: #1a84c6;
        color: #fff;
      }
      .more-content-wording button:hover{
        background-color: #f3874f;
      }
      .more-info-img{
          background: url(https://res.cloudinary.com/african-centre-for-peace-and-human-life/image/upload/v1526380510/Pesamoni/rohit-tandon.png) center;
          background-size: cover;
          height: 60vh;
          background-color: white;
      }
      /* 
      ===========================================
      section for more info ends here ends here
      ===========================================
      */
</style>