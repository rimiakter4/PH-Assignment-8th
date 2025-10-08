import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import heroimg from '../../assets/hero.png'

const Banner = () => {
    return (
        <div>
           <div className='text-center'>
    <h1 className='lg:text-7xl text-3xl font-bold my-6'>We Build <br /><span className=' bg-linear-to-l mr-2 from-[#9F62F2] to-[#632EE3]  bg-clip-text text-transparent font-bold'>Productive</span>
Apps</h1>
<p className='mb-7 text-[11px] lg:text-[16px] text-gray-400'>At HERO. IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
<div className='mb-3.5 '>
<button className="btn  mr-4"><FaGooglePlay />Google Play</button>
<button className="btn "><FaAppStoreIos />App Store</button>
</div>

<div className='flex  justify-center items-center lg:mt-20'>
    <img  className='text-center' src={heroimg} alt="" />
</div>
<div className='text-center bg-linear-to-t mr-2 from-[#9F62F2] to-[#632EE3] lg:p-19 p-10 text-white '>
    <h2 className='lg:text-5xl text-2xl font-bold text-white '>Trusted by Millions, Built for You</h2>
    <div className='flex lg:flex-row flex-col justify-center items-center lg:gap-20 gap-9 lg:mt-12 mt-5
    '>

       

       
<div><h1 className='text-[12px] lg:text-[16px]'>Total Downloads</h1>
<p className='lg:text-6xl text-3xl font-bold text-white lg:my-5'>29.6M</p>
<p className='text-[12px] lg:text-[16px]'>21% more than last month</p>



</div>
<div><h1 className='text-[12px] lg:text-[16px]' >Total Reviews</h1>
<p className='lg:text-6xl text-3xl font-bold text-white lg:my-5'>906K</p>
<p className='text-[12px] lg:text-[16px]'>46% more than last month</p>



</div>
<div><h1 className='text-[12px] lg:text-[16px]'>Active Apps</h1>
<p className='lg:text-6xl text-3xl font-bold text-white lg:my-5'>132+</p>
<p className='text-[12px] lg:text-[16px]'>31 more will Launch</p>



</div>


 
</div>
</div>
 </div>
        </div>
    );
};

export default Banner;