import { createRouter, createWebHashHistory} from "vue-router";
import Home from './home/Home';
import Benvenuto from './scopri/Benvenuto'
const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {path:'/', component:Home},
        {path:'/scopri', component:Benvenuto}
    ]
})

export default router;