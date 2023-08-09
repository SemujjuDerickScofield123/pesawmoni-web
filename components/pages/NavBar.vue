<template>
  <nav>
           <router-link to="/pesamoni">Pesamoni</router-link>
           <router-link to="/cashchat">CashChat</router-link>
           <router-link to="/education">Education</router-link>
           <router-link to="/kaatchup">Kaatch-Up</router-link>
           <router-link to="/about-us">About Us</router-link>
           <router-link to="/pricing">Pricing</router-link>
         </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        top: 1rem;
        z-index: 99999;
        height: 4rem;
        margin-top: 1rem;
        margin-left: 20rem;
        /* width: 100%;         */
      }
      nav a{
        padding: 1rem;
        color: #f3874f;
      }
      nav a:hover{
        color: #f3874f;
      }
      nav h1{
        margin: 0 6rem 0 2rem;
        color: #fff;
      }
      a{
      text-decoration: none;
      padding: 4rem;
      font-size: 1.3rem;
    }

</style>