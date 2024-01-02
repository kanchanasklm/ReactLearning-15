
import React,{lazy,Suspense, useState} from "react";
import ReactDOM from "react-dom/client";  
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";

import Cart from "./components/Cart";

const Instamart=lazy(()=>import("./components/Instamart"));
const About=lazy(()=>import("./components/About"));

/**
             * Header
             *   -Logo
             *   -NavItems
             *   -Cart
             *   
             *   Body
             *     -SearcHbar
             *     -restaurantList
             *     -restaurantCard
             *       -Image
             *       -Name
             *       -Rating
             *       -Cuisines
             * 
             *    Footer
             *     -Links 
             *     -CopyRights
             * 
             *  
             * 
             */ 

const AppLayout=()=>{

    const[user,setUser]=useState({
        name:"Kanchana",
        email:"kanchanapalavaalsa699@gmail.com"
    });

    return(
        <Provider store={store}>
        <UserContext.Provider 
        value={{
            user:user,
            setUser:setUser
        }}
        >
            <Header/>
            <Outlet/>
            <Footer/>
            </UserContext.Provider>
            </Provider>
        );
};

const appRouter=createBrowserRouter([
    {
    path: "/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
        {
        path:"/",
        element:<Body user={{
            name:"Kanchana",
            email:"kanchanapalavalasa699@gmail.com"
        }}/>,
    },

    {
        path:"/about",
        element:<Suspense
        fallback={<Shimmer/>}><About/></Suspense>,
        children:[
            {
                path:"Profile",
                element:<Profile/>,
            },
        ]
    },
    {
        path:"/contact",
        element:<Contact/>,
    },
    {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
    },

    {
        path:"/instamart",
        element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
    },
    {
        path:"/cart",
        element:<Cart/>,
    }
    ]
    },

    
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
