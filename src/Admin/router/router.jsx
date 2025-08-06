import { Login } from "../views/Login"
import { Quejas } from "../views/Quejas"
import { Reservas } from "../views/Reservas"


 const routesAdmin =  [
    {
        index:true,
        element: <Login/>
    },
    {
        path: "reservas",
        element: <Reservas/>,
    },
    {
        path: "quejas",
        element: <Quejas/>,
    }
]


export default routesAdmin