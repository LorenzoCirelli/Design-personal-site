import { createRouter, createWebHashHistory} from "vue-router";
import Home from './home/Home';
import Benvenuto from './scopri/Benvenuto';
import Progetti from './progetti/Progetti';
const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {path:'/', component:Home},
        {path:'/scopri', component:Benvenuto},
        {path:'/progetti', component:Progetti}
    ]
})

export default router;