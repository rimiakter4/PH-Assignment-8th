// import React, { useState } from 'react';
import Navbar from '../../Component/Header/Navbar';
import { Outlet,useRouteError} from 'react-router-dom';
import Footer from '../../Component/Fotter/Footer';
import Eoor from '../Eoor/Eoor';
import { ToastContainer } from 'react-toastify';
// import { useRouteError } from 'react-router';

const Roots = () => {
    const error = useRouteError();
    //    const [loading, setLoading] = useState(false);
    return (
        <div>
           
     <Navbar   />
    {error?<Eoor error={error}/>:<Outlet />}
    <Footer />
  
        </div>
        
    );
};

export default Roots;
