<template>
  <div class="supported-network-container">
    <div class="home-wrapper">
        <nav>
               <h1>Supported Networks</h1>
               <router-link to="/">Home</router-link>
               <router-link to="/pesamoni">Pesamoni</router-link>
               <router-link to="/cashchat">CashChat</router-link>
               <router-link to="/education">Education</router-link>
               <router-link to="/kaatchup">Kaatch-Up</router-link>
               <router-link to="/about-us">About Us</router-link>
               <router-link to="/pricing">Pricing</router-link>
            </nav>
            <div class="home-content">
                <h1>Supported Networks</h1>
                <p>For more information about supported networks, you can contact support@pesamoni.com.</p>
            </div>
             <button class="contact-us-btn" @click="contactUs"> <i class="fa fa-envelope-o" aria-hidden="true"></i> Contact us</button>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from './footer/MyFooter.vue'
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
.supported-network-container{
    background-color: #fff;
    overflow: hidden;
}
    .home-wrapper{
        background-color: black;
        background-size: cover;
        height: 100vh;
        color: #fff;
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
        margin: 0 3rem 0 2rem;
        color: #1a84c6;
      }
      a{
      text-decoration: none;
      padding: 4rem;
      font-size: 1.3rem;
    }
    .home-content{
        position: absolute;
        top: 20rem;
        left: 5rem;
        color: #fff;
        width: 45%;
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

</style>