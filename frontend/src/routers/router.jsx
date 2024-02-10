import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";

import About from "../components/About";

import SpeacialDeals from "../SpeacialDeals/SpeacialDeals";
import Mybookings from "../Bookings/Mybookings";
import DashboardLayout from "../DashBoard/DashboardLayout";
import Uploadhotels from "../DashBoard/Uploadhotels";
import Manage from "../DashBoard/Manage";
import Edit from "../DashBoard/Edit";
import Dashboard from "../DashBoard/dashboard";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Logout from "../components/Logout";
import SearchToBookpath from "../Tour/SearchToBookpath";
import { TourMain } from "../Tour/TourMain";
 const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:'/',
          element:<Home/>
  

        },
        {
          path:'/searchTobook/:country',
          element:<SearchToBookpath/>,        
          loader:({params})=>fetch(`http://localhost:9000/all-hotels/${params.country}`)

        },
        {
          path:'/mybookings',
          element:<Mybookings/>,
         
        },
        {
          path:"/speacialdeals",
          element:<SpeacialDeals/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/tour',
          element:<TourMain/>
        }

      ]
    },
    
    {
      path:'/admin/dashboard',
      element:<DashboardLayout/>,
      children:[
        {
          path:'/admin/dashboard/upload',
          element:<Uploadhotels/>
        },
        {
          path:'/admin/dashboard/manage',
          element:<Manage/>
        },
        {
          path:'/admin/dashboard/edit-hotels/:id',
          element:<Edit/>,
          loader:({params})=>fetch(`http://localhost:9000/hotels/${params.id}`)

        },
        {
          path:'/admin/dashboard',
          element:<Dashboard/>
        }

      ]
    },
    
      {
        path:'/signup',
        element:<Signup/>
      },{
        path:'login',
        element:<Login/>
      },{
        path:'logout',
        element:<Logout/>
      }
    

  ]);
  export default router;