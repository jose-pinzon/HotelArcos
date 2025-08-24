
import { Login } from "../views/Login"
import { Quejas } from "../views/Quejas"
import { Reservas } from "../views/Reservas"


 const routesAdmin =  [

    {
        path:'reservas',
        element: <Reservas/>,
    },
    {
        path: "quejas",
        element: <Quejas/>,
    },
    {
        index:true,
        element: <Reservas/>,
    }
]


export default routesAdmin