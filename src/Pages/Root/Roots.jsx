import React from 'react';
import Navbar from '../../Component/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Component/Fotter/Footer';

const Roots = () => {
    return (
        <div>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
        </div>
    );
};

export default Roots;