import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import About from '@/views/AboutView.vue'
import SessionsView from '@/views/SessionsView.vue';
import BookingsView from '@/views/BookingsView.vue';
import ContactPage from '@/views/ContactPage.vue'
import SignUp from '@/views/SignUp.vue'
import RegisterTutor from '@/views/RegisterTutor.vue'
import SignIn from '@/views/SignIn.vue';
import AdminView from '@/views/AdminView.vue';
import UserProfile from '@/views/UserProfile.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,  
  },
  {
    path: '/about',
    name: 'about',
    component: About,  
  },
  {
    path : '/tuteesignup',
    name : 'tuteesignup',
    component : SignUp
  },

  {
    path: '/sessions',
    name: 'sessions',
    component: SessionsView,  
  },
  {
    path: '/bookings',
    name: 'bookings',
    component: BookingsView,  
  },

  {
    path : '/tutorsignup',
    name : 'tutorsignup' ,
    component : RegisterTutor
  },

  {
    path : '/login',
    name : 'login' ,
    component : SignIn
  },

  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },

  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
  },

  {
    path: '/profile',
    name: 'profile',
    component: UserProfile,
  }
  




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  // Use HTML5 history mode
  routes,
})

export default router


