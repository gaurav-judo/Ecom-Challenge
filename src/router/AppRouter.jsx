import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home";
import { useEffect } from "react";
import Products from "../pages/Products";



const AppRouter = () => {

    useEffect(() => {
    },[])
    

    let router = createBrowserRouter([
        {
            path:"/",
            element:<AuthLayout/>,
        },
        {
            path:"/home",
            element:<HomeLayout/>,
            children:[
                {
                    path:"",
                    element:<Home/>
                },
                {
                    path:"products",
                    element:<Products/>
                }
            ]
        }
    ])
  return <RouterProvider router= {router}/>
}

export default AppRouter;
