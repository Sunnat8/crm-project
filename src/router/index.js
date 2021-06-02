import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/auth/register',
    name: 'Registor',
    component: () => import('../components/register'),
  },
  {
    path: '/auth/login',
    name: 'LogIn',
    component: () => import('../components/login'),
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404'),
  }
];

const router = new VueRouter({
  routes
});

export default router;