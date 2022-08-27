import {createRouter,createWebHistory} from 'vue-router'
import Dashboard from '../component/Dashboard.vue'
import Simple from '../component/Simple.vue'
const routes = [
    {
        path:'/',
        name:'Dashboard',
        component:Dashboard

    },
    
    {
        path:'/simple',
        name:'Simple',
        component:Simple

    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router