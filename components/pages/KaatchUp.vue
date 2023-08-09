<template>
    <div class="kaatch-container">
        <div class="home-wrapper">
        <nav>
           <h1>KAATCH-UP</h1>
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
                  <img src="https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=620&h=750&dpr=1" alt="">
            </div>
            <div>
                <article>
                    <img src="https://play-lh.googleusercontent.com/Y8skkGEOTjgsRmb1fWavoBNavrPv5hXmoQe1Xg0z0LegJVc6GDoetFg_vji5V5rBaA=w240-h480-rw" alt="">
                    <h2>With Kaatch-Up we make life more easier.</h2>
                    <p>Kaatch-Up has solved all the hassles of fundraising, entertainment, commucation and the way we make money, make money by status views.</p>
                    <button>Get started <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span></button>
                </article>
                    <!-- <button>Learn more</button> -->
            </div>               
            <button class="contact-us-btn" @click="contactUs"> <i class="fa fa-envelope-o" aria-hidden="true"></i> Contact us</button>
            </div>
            
        </div>   
      <section class="other-content">
          <div class="elearning-distance-learning">
              <img class="fund-rasing-img" src="https://i.ytimg.com/vi/77fzoKmfoR4/maxresdefault.jpg" alt="">
              <div class="img-text">
                  <h2>Kaatc-Up fundraising</h2>
                  <p>
                      Kaatch-Up softens the process and all the hassels involved in raising funds from Friends, Family and everyone wherever in the world. You can raise funds for your business,occassions like baby shower, wedding, introduction and so many others..
                  </p>
              </div>
          </div>
          <div class="digital-wallet">
              <div class="img-text1">
                  <h2>Kaatch-Up we Catch up</h2>
                  <p>
                      Kaatch-Up enables you to connect with all the friends, family, and stranger, just don't be bored when you have internet, just <a href="Kaatch-Up.apk">download</a>  our KaatchUp app from the playstore and the appstore, start socialising with ease, have some fun with buddies. .
                  </p>
              </div>
              <img class="kaatchup-connection" src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=750&h=750&dpr=1" alt="">
          </div>
          <div class="elearning-distance-learning">
              <img class="kaatchup-connection" src="https://images.pexels.com/photos/3965546/pexels-photo-3965546.jpeg?auto=compress&cs=tinysrgb&w=400" alt="">
              <div class="img-text">
                  <h2>Vibes avenue</h2>
                  <p>
                    Create Vibes with Kaatch-Up in form of Video, Text, Images and much more, then you can browse through all the vibes your friends and everyone has posted, have fun with the Vibe avenue as you in touch with your favorite people.
                  </p>
              </div>
          </div>
          <div class="digital-wallet">
              <div class="img-text1">
                  <h2>Chat, Video call & Voice Call</h2>
                  <p>
                      We have the most encrypted and secure communication platform, we have the End to End Encryption (E2EE), all your data is secure, just have fun and communicate all over the world with anyone at an Instant messaging.
                  </p>
              </div>
              <img class="kaatchup-connection" src="https://images.pexels.com/photos/4353618/pexels-photo-4353618.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
          </div>
      </section >
      <section class="cashcaht-testimonies">
          <div class="testimonies-content">
              <h2>Features of Kaatch-Up</h2>
              <p>
                  Most features explained in just one video, you can see all the amazing features which are in the system.
              </p>
          </div>
          <div>
              <video src="../../video/kaatchup-video.mp4" width="640" height="480" controls></video>
          </div>
      </section>
      <my-footer></my-footer>
    </div>
  </template>
  
  <script>
  import MyFooter from './footer/MyFooter.vue';
  export default {
    components:{
      MyFooter,
    },
    methods:{
        contactUs(){
          this.$router.push('/contact-us')
        }
      }
  }
  </script>
  
  <style scoped>
  .kaatch-container{
    background-color: #428bca;
    overflow-x: hidden;
  }
  .home-wrapper{
        background-image: linear-gradient(45deg,#1a84c6,#1a84c6,  #f3874f, #f48e21);
        background-attachment: fixed;
        background-size: 300% 300%;
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
    }
    .contact-us-btn{
      position: fixed;
      right: 0;
      bottom: 0;
      height: 3rem;
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

  .other-content h2, .other-content p{
      color: white;
  }
  .elearning-distance-learning{
      background-color: whitesmoke;
  }
  .elearning-distance-learning p, .elearning-distance-learning h2  {
    color: black;
  }
  .elearning-distance-learning, .digital-wallet{
      display: grid;
      grid-template-columns: 1fr 1fr;
  }
  .elearning-distance-learning img, .digital-wallet img{     
      margin: 6rem 2rem 3rem 10rem;
  }
  .fund-rasing-img{
    width: 30rem;
  }
  .kaatchup-connection{
      height: 25rem;
      width: 20rem;
  }
  .img-text{
      margin: 10rem 8rem 0 2rem;
  }
  .digital-wallet img{
      margin: 6rem  3rem 3rem 10rem;
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
      background-color: whitesmoke;
  }
  .cashcaht-testimonies video{
      margin: 3rem;
  }
  .testimonies-content{
      color: #1a84c6;
      margin: 10rem 1rem 0 2rem;
  }
  /* 
  ===============================
  cashcaht-testimonies stops here
  ===============================
  */
  
  </style>