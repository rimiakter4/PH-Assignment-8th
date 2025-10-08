import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from '../Pages/Root/Roots';
import Eoor from '../Pages/Eoor/Eoor';
import Home from '../Pages/Home/Home';
import All from '../Pages/ALL/All';
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Roots,
    errorElement:<Eoor></Eoor>,
    children:[{

index:true,
path:'/',
loader:()=>fetch('8app.json'),
Component:Home

    },{
path:'/All',
loader:()=>fetch('Allapps.json'),
Component:All

    }
  ]
  },
]);