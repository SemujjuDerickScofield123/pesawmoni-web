<template>
  <div class="contact-container">
        <nav>
           <h1>Contact Us</h1>
                <router-link to="/">Home</router-link>
                <router-link to="/pesamoni">Pesamoni</router-link>
                <router-link to="/cashchat">CashChat</router-link>
                <router-link to="/education">Education</router-link>
                <router-link to="/kaatchup">Kaatch-Up</router-link>
                <router-link to="/about-us">About Us</router-link>
                <router-link to="/pricing">Pricing</router-link>
        </nav>
      <!-- <h5>Here you can send us an inquiry concerning general questions about Pesamoni</h5> -->
        <div class="contact-page">
            <!-- <div class="contact-form">
                <form action="" @submit.prevent="submitData()">
                    <div class="form-input">
                        <div class="form-floating mb-3" :class="{invalid: firstNameValidity === 'invalid'}">
                            <input type="text" class="form-control" id="floatingFirstName" placeholder="First Name" v-model="firstName" @blur="firstNameValidation">
                            <label for="floatingFirstName">First Name</label>
                        </div>
                        <p v-if="firstNameValidity === 'invalid'" class="error-p"><i>This field is required</i></p>
                        <div class="form-floating mb-3" :class="{invalid: lastNameValidity === 'invalid'}">
                            <input type="text" class="form-control" id="floatingLastName" placeholder="Last Name" v-model="lastName" @blur="lastNameValidation">
                            <label for="floatingLastName">Last Name</label>
                        </div>
                        <p v-if="lastNameValidity === 'invalid'" class="error-p"><i>This field is required</i></p>
                        <div class="form-floating mb-3" :class="{invalid: emailValidity === 'invalid'}">
                            <input type="email" class="form-control" id="floatingEmail" placeholder="Email" v-model="email" @blur="emailValidation">
                            <label for="floatingEmail">Email</label>
                        </div>
                        <p v-if="emailValidity === 'invalid'" class="error-p"><i>Put in the right email</i></p>
                        <div class="form-floating mb-3" :class="{invalid: messageValidity === 'invalid'}">
                            <textarea class="form-control" placeholder="Send us a message " id="floatingTextarea" rows="10" v-model="message" @blur="messageValidation"></textarea>
                            <label for="floatingTextarea">Send us a message</label>
                        </div>
                        <p v-if="messageValidity === 'invalid'" class="error-p"><i>Message can't be empty</i></p>
                        <button class="btn">Send</button>
                    </div>
                </form>
            </div> -->
            <!-- end of the form -->
            <!-- start of the contact info -->
            <div class="contact-info">
                <h3>EMAIL</h3>
                <p>For email, please use the following based on your inquiry:</p>
                <p>inquiries@pesamoni.com</p>
                <p>contact@pesamoni.com</p>
                <p>support@pesamoni.com</p>
                <h3>TELEPHONE</h3>
                <p>+256 39 3216308</p>
                <h3>LOCATION</h3>
                <p>Plot 146, Semawata Road, Ntinda</p>
                <p>Kampala, Uganda</p>
            </div>
            <!-- end of contact info -->
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
    data(){
        return{
            firstName : '',
            firstNameValidity : 'pending',
            lastName : '',
            lastNameValidity: 'pending',
            email : '',
            emailValidity : '',
            message : '',
            messageValidity : 'pending'
            
        }
    },
    methods:{
        submitData(){
            this.firstName = '',
            this.lastName = '',
            this.email = '',
            this.message = ''
        }
        ,
        firstNameValidation(){
            if(this.firstName.trim() === ''){
                this.firstNameValidity = 'invalid'
            }else{
                this.firstNameValidity = 'valid'
            }
        },
        lastNameValidation(){
            if(this.lastName.trim() === ''){
                this.lastNameValidity = 'invalid'
            }else{
                this.lastNameValidity = 'valid'
            }
        },
        emailValidation(){
            if(this.email.trim() === ''){
                this.emailValidity = 'invalid'
            }else{
                this.emailValidity = 'valid'
            }
        },
        messageValidation(){
            if(this.message.trim() === ''){
                this.messageValidity = 'invalid'
            }else{
                this.messageValidity = 'valid'
            }
        },
    }
}
</script>

<style scoped>
    .contact-container{
        min-height: 100vh;
        background-color:black ;
    }
    nav{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        z-index: 99999;
        height: 4rem;
        margin: -2rem 0 2rem 0;
        width: 100%;    
        padding: 4rem 0;    
      }
      nav a{
        padding: 1rem;
        color: black;
        color: #1a84c6;
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
    h3{
       text-align: center;
       padding-top: .5rem;
    }
    .contact-page{
        padding: 1rem 10rem 1rem 10rem;
    }
    /* .form-input{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        margin: 6rem 2rem 2rem 2rem;
    }
    .contact-form{
        margin-top: 6rem;
        margin-bottom: 2rem;
        background-color: #1a84c6;
        min-height: 50vh;
    } */
    h3, h5{
        color: black;
        margin: 6rem  20rem 2rem;
    }
    /* .form-floating input, .form-floating textarea, .form-floating input:active, .form-floating textarea:active{
        background: transparent;
        border: none;
        border-bottom: 1px solid white;
        outline: none;
        padding: 5px 0;

    }
     .form-floating label{
        color: white;
    }
    .form-floating input:hover, .form-floating textarea:hover{
        border-bottom: 1px solid cyan;
        color: white;
    } */
    /* .form-floating label:active{
        color: cyan;
    }
    .btn{
        background-color: #f3874f;
        width: 10rem;
        padding: .8rem;
    } */
    /* .btn:hover{
        background-color: #f3874f;
    }
    .error-p{
    color: red;
    font-size: smaller;
    margin-top: -6px;
} */
.contact-info{
    background-color:#f3874f;
    color: white;
    margin: 6rem 2rem 2rem 2rem;
    width: 95%;
}
.contact-info p, .contact-info h3{
    margin-left: 3rem;
}
.contact-info h3{
    margin: 2rem;
    text-align: left;
    font-size: large;
}

</style>