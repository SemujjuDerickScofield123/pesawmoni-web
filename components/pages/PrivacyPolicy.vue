<template>
  <div class="privacy-policy-container">
    <div class="home-wrapper">
        <nav>
               <h1>Privacy Policy</h1>
               <router-link to="/">Home</router-link>
               <router-link to="/pesamoni">Pesamoni</router-link>
               <router-link to="/cashchat">CashChat</router-link>
               <router-link to="/education">Education</router-link>
               <router-link to="/kaatchup">Kaatch-Up</router-link>
               <router-link to="/about-us">About Us</router-link>
               <router-link to="/pricing">Pricing</router-link>
            </nav>
            <div class="home-content">
                <h1>PRIVACY POLICY</h1>
            </div>
            <div class="more-home-content">
                <p>Integrating the E-learning systems And Payments</p>
            </div>
             <button class="contact-us-btn" @click="contactUs"> <i class="fa fa-envelope-o" aria-hidden="true"></i> Contact us</button>
    </div>
    <section class="policies">
        <h3>PESAMONI PRIVACY POLICY</h3>
        <h5>What information do we collect?</h5>
        <p>We collect information from you when you register on our site, place an order with a PesaMoni merchant or fill out a form.</p>
        <p>When registering on our site or ordering from a PesaMoni merchant, as appropriate, you may be asked to enter your; name, e-mail address or phone number. You may, however, visit our site anonymously.</p>
        <h5>What do we use your information for?</h5>
        <p>Any of the information we collect from you may be used in one of the following ways:</p>
        <p class="bullet-paragraph">To personalize your experience: your information helps us to better respond to your individual needs.</p>
        <p class="bullet-paragraph">To improve our website: we continually strive to improve our website offerings based on the information and feedback we receive from you.</p>
        <p class="bullet-paragraph">To improve customer service: your information helps us to more effectively respond to your customer service requests and support needs</p>
        <p class="bullet-paragraph">To process transactions: your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.</p>
        <p class="bullet-paragraph">To send periodic emails: the email address you provide for order processing, may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.</p>
        <h5>How do we protect your information?</h5>
        <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>
        <p>We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential.</p>
        <p>After a transaction, your private information (credit cards, etc.) will not be stored on our servers.</p>
        <h5>Do we use cookies?</h5>
        <p>We do not use cookies</p>
        <h5>Do we disclose any information to outside parties?</h5>
        <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>
        <h5>Third party links</h5>
        <p>Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>
        <h5>Children’s Online Privacy Protection Act Compliance</h5>
        <p>We are in compliance with the requirements of COPPA (Children’s Online Privacy Protection Act) and do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older.</p>
        <h5>Your Consent</h5>
        <p>By using our site, you consent to our websites privacy policy.</p>
        <h5>Changes to our Privacy Policy</h5>
        <p>If we decide to change our privacy policy, we will post those changes on this page.</p>
        <h5>Contacting Us</h5>
        <p class="linked-to-email">If there are any questions regarding this privacy policy, you may contact <a href="mailto:inquiries@pesamoni.com">inquiries@pesamoni.com</a>.</p>
    </section>
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
.privacy-policy-container{
    background-color: #fff;
    overflow: hidden;
}
.home-wrapper{
        background-color: black;
        background-size: cover;
        height: 80vh;
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
        margin: 0 6rem 0 2rem;
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
    .more-home-content{
    position: absolute;
    top: 32rem;
    left: 20rem;
    background-color:#f3874f ;
    }
    .more-home-content p{
        text-align: center;
        padding: 1rem 3rem;
        font-size: 1.5rem;

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

      /* 
      ============================
      policies starts here
      ============================
      */

      .policies{
          background-color: #fff;
          min-height: 100vh;  
          margin: 8rem 15rem       
      }

        .bullet-paragraph::before {
            content: "\2022";
            margin-right: 10px; 
        }
        .linked-to-email a{
            text-decoration: none;
            padding: .5rem;
            font-size: 1rem;
        }
        .linked-to-email a:hover{
            text-decoration: underline;
        }
        p{
          font-weight: 100;
          font-size: 0.85rem;
      }
      h5{
          font-weight: 300;
      }
      /* 
      ============================
      policies starts here
      ============================
      */
</style>