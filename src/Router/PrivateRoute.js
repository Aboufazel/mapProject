import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Map from "../pages/Map";
import GetPage from "../pages/GetPage";
import Success from "../pages/Success";

const PrivateRoute = ()=>{

    const router = createBrowserRouter (

    [
            {path: "/",
                children:[
                    {
                        index:true,
                        element: <Home/>,
                    },{
                        path:"login",
                        element: <Login/>

                    },{
                        path: "get",
                        element: <GetPage/>
                    },{
                        path: "map",
                        element: <Map/>
                    },{
                     path:"success",
                     element:<Success/>
                    }

                ]
            },
        ])
    return(
        <RouterProvider router={router}/>
    )
}



export default PrivateRoute;
