import React from 'react';
import Navbar from '../../Component/Header/Navbar';
import { Outlet,useRouteError} from 'react-router-dom';
import Footer from '../../Component/Fotter/Footer';
import Eoor from '../Eoor/Eoor';
import { ToastContainer } from 'react-toastify';
// import { useRouteError } from 'react-router';

const Roots = () => {
    const error = useRouteError();
    return (
        <div>
    <Navbar></Navbar>
    {error?<Eoor error={error}/>:<Outlet/>}
    <Footer></Footer>
    <ToastContainer />
        </div>
        
    );
};

export default Roots;