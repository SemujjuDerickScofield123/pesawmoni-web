import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './components/pages/HomePage.vue'
import ContactUs from './components/pages/ContactUs.vue'
import AboutUs from './components/pages/AboutUs.vue'
import CashChat from './components/pages/CashChat.vue'
import KaatchUp from './components/pages/KaatchUp.vue'
import EducationPlatform from './components/pages/EducationPlatform.vue'
import PesaMoni from './components/pages/PesaMoni.vue'
import PesamoniCareer from './components/pages/PesamoniCareer.vue'
import PrivacyPolicy from './components/pages/PrivacyPolicy.vue'
import TermsCondition from './components/pages/TermsCondition.vue'
import NewsBlog from './components/pages/NewsBlog.vue'
import SupportedNetwork from './components/pages/SupportedNetwork.vue'
import PesaPromos from './components/pages/PesaPromos.vue'
import ProductsServices from './components/pages/ProductsServices.vue'
import FrequentlyAskedQuestions from './components/pages/footer/help-service-and-products/FrequentlyAskedQuestions.vue'
import SendMoney from './components/pages/footer/help-service-and-products/SendMoney.vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', component: HomePage},
        {path: '/contact-us', component: ContactUs},
        {path: '/about-us', component: AboutUs},
        {path: '/cashchat', component: CashChat},
        {path: '/kaatchup', component: KaatchUp},
        {path: '/education', component: EducationPlatform},
        {path: '/pesamoni', component: PesaMoni},
        {path: '/faqs', component: FrequentlyAskedQuestions},
        {path: '/products-services', component: ProductsServices},
        {path: '/promos', component: PesaPromos},
        {path: '/send-money', component: SendMoney},
        {path: '/supported-network', component: SupportedNetwork},
        {path: '/news-blogs', component: NewsBlog},
        {path: '/privacy-policy', component: PrivacyPolicy},
        {path: '/terms-conditions', component: TermsCondition},
        {path: '/careers', component: PesamoniCareer},
    ]
})
app.use(router)
app.mount('#app')
