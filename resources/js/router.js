import Vue from  'vue';
import VueRouter from  'vue-router';
import Login from "./components/Login";
import Register from "./components/Register";
import HomeComponent from "./components/HomeComponent";

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:'/login',
        component:Login,
        name:"Login",
        beforeEnter:(to,from,next) => {
            if (localStorage.getItem('ACCESS_TOKEN')) {
                next('/home');
            } else {
                next();
            }
        }
    },
    {
        path:'/register',
        component:Register,
        name:'Register',
        beforeEnter:(to,from,next) => {
            if (localStorage.getItem('ACCESS_TOKEN')) {
                next('/home');
            } else {
                next();
            }
        }
    },
    {
        path:'/home',
        component:HomeComponent,
        name:'Home',
        beforeEnter:(to,from,next) => {
            axios.get('/api/user')
                .then(res => {
                    console.log(res)
                    next();
                })
                .catch(err => {
                    next('/login');
                })
        }
    }
];

const router = new VueRouter({routes});
router.beforeEach((to,from,next) => {
    const token = localStorage.getItem('ACCESS_TOKEN') || null;
    console.log("Bearer " + token);
    window.axios.defaults.headers['Authorization'] = "Bearer " + token;
})

export default router;
