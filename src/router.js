import { createRouter, createWebHashHistory } from "vue-router";
import  List  from './views/List.vue';
import Register from "./views/Register.vue";

const routes = [{
    path: '/',
    name: 'List',
    component: List
},
    {
        path: "/Register",
        name: "register",
       component:Register
       
    }
];

const router = createRouter({ history: createWebHashHistory(), routes })

export default router;