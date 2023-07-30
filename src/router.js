import { createRouter, createWebHashHistory} from "vue-router";
import Us from './compontents/Us.vue';
import App from './App.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {path:'/', component:App},
        {path:'/:index?', component: Us}
    ]
})

export default router;