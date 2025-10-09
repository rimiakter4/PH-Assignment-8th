import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Apps from '../Apps/Apps';
// import { useLoaderData } from 'react-router';
import useApps from '../../Hooks/useApps';
import All from '../ALL/All';

const Home = () => {
    // const data=useLoaderData();
    const {data,loading,eorr}=useApps();
    // console.log(appdatas)
    // console.log(data)
    return (
        <div>
            <Banner></Banner>
         
            <Apps data={data}></Apps>

        </div>
    );
};

export default Home;