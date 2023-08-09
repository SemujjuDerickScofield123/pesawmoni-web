<template>
  <div class="about-us-container">
    <div class="homepage">
        <nav>
            <h1>About</h1>
           <router-link to="/">Home</router-link>
           <router-link to="/pesamoni">Pesamoni</router-link>
           <router-link to="/cashchat">CashChat</router-link>
           <router-link to="/education">Education</router-link>
           <router-link to="/kaatchup">Kaatch-Up</router-link>
           <router-link to="/about-us">About Us</router-link>
           <router-link to="/pricing">Pricing</router-link>
         </nav>
        <article>
            <p>Together with our customers in industry, education, payments and communication, we address today's challenges across the globe.</p>
        </article>
        <button class="contact-us-btn" @click="contactUs"> <i class="fa fa-envelope-o" aria-hidden="true"></i> Contact us</button>
    </div>
    <section>
        <div class="about-pesamoni">
            <h1>Who we are</h1>
            <p>PESAMONNI Limited is Software Company operating in East Africa. PESAMONI 
                began in 2016 with a view of transforming advanced technology to become ordinary 
                for the normal person. We connect over 500,000 clients across East Africa. Our 
                strength is in development of all kinds of software ranging from education, Finance,
                Agriculture, Health, Telecommunications and Banking
            </p>
        </div>
    </section>
    <section class="strategy">
        <div>
            <img src="https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg" alt="">
        </div>
        <div class="strategy-content">
            <h2>Strategy</h2>
            <p>We combine real and the digital worlds. Our strategy is powered by the long term. addressing the biggest challenges of our generation; old fashioned schooling, backwards communication, analog payment systems</p>
        </div>
    </section>
    <section>
        <h2>Products & Services</h2>
        <div class="business-and-services">
            <div class="e-learning">
                <div>
                    <img src="https://images.pexels.com/photos/9159381/pexels-photo-9159381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div >
                <div class="heading-content">
                    <h3>E-Learning and Distance learning</h3>
                    <p>
                        PESAMONI has an E-learning solution customized for any kind of school,
                        university, secondary school, primary school with unique features and tools
                        available to conduct classes with live video class interaction, Audio
                        interaction, Library for the classes, teacher’s virtual classrooms,
                        administration virtual monitoring tools for E-learning. We have Learnida
                        advanced e-learning software for all schools and available to install for each
                        school that suits the needs of the school.
                    </p>
                </div>
            </div>
            <div class="payments">
                <div>
                    <img src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
                <div class="heading-content">
                    <h3>Card Payments</h3>
                    <p>
                        Card payments using Stanbic Bank for Acquiring Card transaction over Card
                        Not Present. Let us do the heavy lifting for you and your bank, we have all the resources to facilitae everything between you and the bank.
                    </p>
                </div>
            </div>
            <div class="software-development">
                <div>
                    <img src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
                <div class="heading-content">
                    <h3>Software Development</h3>
                    <p>
                        PESAMONI develops any kind of software in all sectors in the economy ELearning, Payment gateway, E-commerce, Management systems, School
                        payment systems and educational systems.
                    </p>
                </div>
            </div>
        </div>
        
    </section>
    <!-- Team starts here -->
    <section class="team">
        <div class="pesamomi-team">
            <h1>Our Team</h1>
            <div class="team-img">
                <div class="img-content">
                    <img src="../../assets/pesateam/asher2.jpg" alt="Asher image">
                    <p>Founder and CEO</p>
                </div>
                <div class="img-content">
                    <img src="../../assets/pesateam/reagan.jpg" alt="Reagan image">
                    <p>Head of Engineering</p>
                </div>
                <div class="img-content">
                    <img src="../../assets/pesateam/daphine2.jpg" alt="daphine image">
                    <p>Head of Sales & Marketing</p>
                </div>
                <div class="img-content">
                    <img src="../../assets/pesateam/allen2.jpg" alt="Allen">
                    <p>Head of Administration</p>
                </div>
            </div>
        </div>
    </section>
    <!-- Team stops here -->
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
.about-us-container{
    background-color: whitesmoke;
    overflow: hidden;
}
/* 
===========================
Home page starts here
===========================
*/
.homepage{
    min-height: 100vh;
    width: 100%;
    background-image: url(https://images.pexels.com/photos/1181317/pexels-photo-1181317.jpeg?auto=compress&cs=tinysrgb&w=1000&h=750&dpr=1);
    background-size: cover;
    position: relative;
    top: -4rem;
    left: 0;
    animation: moveImage 10s infinite alternate;
    
}

@keyframes moveImage{
    0%{
        background-position: 0% 0% ;
    }
    100%{
        background-position: 100% 100%;
    }
}
nav{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        z-index: 99999;
        height: 4rem;
        margin:1rem 0 3rem 3rem;
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

article{
    width: 60%;
    font-size: 1.4rem;
    color: white;
    margin: 4rem;
    /* margin-top: 10rem; */
    padding-top: 10rem;
    font-weight: 900;
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
===========================
Home page stops here
===========================
*/

/* 
===========================
about pesamoni starts here
===========================
*/
.about-pesamoni{
    margin: 4rem;
}
.about-pesamoni h1{
    color: #f3874f;
}
.about-pesamoni p{
    color: black;
}
/* 
===========================
about stops here
===========================
*/

/* 
===========================
strategy starts here
===========================
*/
.strategy{
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: white ;
    margin: 6rem 0;
}
.strategy-content{
    margin-top:5rem ;
}

.strategy h2{
    font-weight: 900;
    margin-top: 2rem;
}
.strategy p{
    font-weight: 500;
    margin-top: 1rem;
}
.strategy-content p{
    margin-top: 1rem;
    margin-bottom: 4rem;
}
.strategy img{
    width: 500px;
    margin: 2rem 1rem;
    border-radius: 5px;
}
/* 
===========================
strategy stops here
===========================
*/
/* 
=================================
products and services starts here
=================================
*/
.business-and-services{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    border-radius: 5px;
}
.e-learning{
    display: flex;
    flex-direction: column;
}
h2{
    color: #f3874f;
    text-align: center;
    margin-bottom: 4rem;
}
.e-learning p, .payments p, .software-development p{
    color: black;
    margin-left: 1.2rem;
    font-size: 1.1rem;
}
.e-learning img, .payments img, .software-development img{
    width: 18rem;
    margin: 0 5rem 4rem 2rem ;
}
h3{
    color: #f3874f;
    margin:1.3rem;
    text-align: center;
}
.heading-content{
    background-color:#ddeef9;
    height: 30rem;
    margin-bottom: 1rem;
}
.heading-content h3{
    margin-top: .1rem;
    padding: 1rem;
}
/* 
=================================
products and services stops here
=================================
*/
/* 
=================================
team starts starts here
=================================
*/

.pesamomi-team{
    background-color: whitesmoke;
}
.pesamomi-team h1{
    text-align: center;
}
.team-img{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
}
.team-img img{
    height: 18rem;
    width: 17rem;
    border-radius: 50%;
    /* margin: 2rem; */
}
.img-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.img-content p{
    margin-top: 1rem;
    background-color:#f3874f;
    padding: 10px 20px;
    border-radius: 10px;
}
/* 
=================================
team stops here
=================================
*/



</style>