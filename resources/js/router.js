import Vue from  'vue';
import VueRouter from  'vue-router';
import Login from "./components/Login";
import Register from "./components/Register";
import HomeComponent from "./components/HomeComponent";

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        component: Login
    },
    {
        path:'/login',
        component:Login,
        name:"Login"
    },
    {
        path:'/register',
        component:Register,
        name:'Register'
    },
    {
        path:'/home',
        component:HomeComponent,
        name:'Home'
    }
];

const router = new VueRouter({routes});

export default router;
