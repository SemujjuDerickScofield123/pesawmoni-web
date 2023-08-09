<template>
  <div class="education-container">
    <nav>
           <h1>EDUCATION</h1>
           <router-link to="/">Home</router-link>
           <router-link to="/pesamoni">Pesamoni</router-link>
           <router-link to="/cashchat">CashChat</router-link>
           <router-link to="/education">Education</router-link>
           <router-link to="/kaatchup">Kaatch-Up</router-link>
           <router-link to="/about-us">About Us</router-link>
           <router-link to="/pricing">Pricing</router-link>
         </nav>
      <section class="education-page">
          <article class="education-home-content">
              <h1>Pesamoni and Education</h1>
              <h2>Inspiring every kind of mind.</h2>
              <h3>Everyone has their own way of learning and expressing creativity. As Pesamoni community and resources empower every kind of educator and every kind of student to learn, create, and define their own success. Let’s move the world forward through our education platforms.</h3>
              <button>Get started <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span></button>
              <button class="contact-us-btn" @click="contactUs"> <i class="fa fa-envelope-o" aria-hidden="true"></i> Contact us</button>
          </article>
      </section>
      <section class="main-content">
        <h1>Learning Management Systems</h1>
          <div class="main-content-img">
              <div>
                  <img src="https://images.pexels.com/photos/4145347/pexels-photo-4145347.jpeg?auto=compress&cs=tinysrgb&w=450&h=500&dpr=1" alt="">
                  <div class="card1">
                      <h4>Primary Schools </h4>
                      <p>Let your little kid learn from home and you can guide them better</p>
                  </div>
              </div>
              <div>
                  <img src="https://images.pexels.com/photos/4144224/pexels-photo-4144224.jpeg?auto=compress&cs=tinysrgb&w=450&h=500" alt="">
                  <div class="card2">
                      <h4>Secondary Schools </h4>
                      <p>We have a well tested Leraning Management system for Secondary Schools</p>
                  </div>
              </div>
              <div>
                  <img src="https://images.pexels.com/photos/6084261/pexels-photo-6084261.jpeg?auto=compress&cs=tinysrgb&w=450&h=500&dpr=1" alt="">
                  <div class="card3">
                      <h4>Institutions Learning </h4>
                      <p>Our system has been used by Victoria University for years now and it was approved by National Council for Higher Education</p>
                  </div>
              </div>
          </div>
      </section>
      <my-footer></my-footer>
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
=======================
Home page starts here 
=======================
*/
.education-container{
    background-color: whitesmoke;
    min-height: 100vh;
}
nav{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        z-index: 99999;
        height: 4rem;
        margin-top: 1rem;
        margin-bottom: 3rem;
        width: 100%;        
      }
      nav a{
        padding: 1rem;
        color: #1a84c6;
        text-decoration: none;
        font-size: 1.3rem;
      }
      nav a:hover{
        color: #f3874f;
      }
      nav h1{
        margin: 0 6rem 0 2rem;
        color:#1a84c6;
      }
.education-page{
    background-color: transparent;
    height: 100vh;
}
.education-page h1{
    font-size: 2.5rem;
    padding-top: 6rem;
}
.education-page h2{
    font-size: 5rem;
    font-weight: 900;
}
.education-page h3{
    font-weight: 200;
}
.education-home-content{
    text-align: center;
    width: 70%;
    margin: 0 0 4rem 12rem;
}
button{
        margin: 3rem;
        padding: 10px 30px;
        border: none;
        border-radius: 5px;
        background-color: #1a84c6;
        z-index: 9999;
        color: white;
    }
    button:hover{
        cursor: pointer;
        background: #f3874f;
        color: white;
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
          color: white;
      }
/* 
==========================
home page ends here
==========================
*/

/*
===============================
main content starts from here 
===============================
*/
.main-content{
    background-color: whitesmoke;
}
.main-content h1{
    color: #f3874f;
    text-align: center;
}
.main-content-img{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 2rem;
    /* gap: 1rem; */
}
.main-content-img img{
    margin-top: 2rem;
    border-radius: 10px 10px 0 0;
}
.card1{
    background-color: #f3874f;
}
.card2{
    background-color: #1a84c6;
}
.card3{
    background-color: #662d91;
}
.card1, .card2, .card3{
    width: 335px;
    border-radius: 0 0 10px 10px;
    height: 10rem;
}
.card1 p, .card2 p, .card3 p{
    margin: 0.5rem;
    text-align: center;
}
.card1 h4 {
    text-align: center;
    color: #1a84c6;
}
.card2 h4, .card3 h4{
   color: #f3874f;
   text-align: center
}
.card3 p{
    color: #fff;
}
/* 
===============================
main content stops from here 
===============================
*/
</style>