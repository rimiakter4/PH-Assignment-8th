import React from 'react';
import { useParams } from 'react-router';
import useApps from '../../Hooks/useApps';
import { PiDownloadSimpleBold } from "react-icons/pi";



const AppDetails = () => {
    const{id}=useParams();
    const {data,loading,eorr}=useApps();
  

    const appdata=data.find(a=>String(a.id)===id)
      if(loading)return <p>loading...</p>
    const {title,image,companyName,downloads,ratingAvg,size}=appdata || {}
    console.log(appdata)
    return (
        <div className='bg-gray-100'> 
        <div className='flex lg:flex-row flex-col items-center gap-9 p-10'>
        <div>
<img  className='w-[300px] h-[287px]' src={image} alt="" />
        </div>
        <div className='w-full '>
<h1 className='text-3xl font-bold my-2'>{title}</h1>
<p className='text-gray-500'>Developed by <span className='bg-linear-to-l font-semibold mr-2  from-[#9F62F2] to-[#632EE3]  bg-clip-text text-transparent'>{companyName} </span>  </p>
  <div className="divider divider-start"></div>
  <div>
    <div className='flex gap-16'>
<div >
    
<img  className='w-[30px]' src="https://i.ibb.co.com/5Cc4KH9/fi-18110198.png" alt="" />
  


<p className='my-2'>Downloads</p>

<h2 className='text-3xl font-bold'>{downloads}</h2>
    </div>
<div >

<img  className='w-[30px]'  src="https://i.ibb.co.com/chZm3xPz/Vector-4.png" alt="" />
   
<p className='my-2'>Average Ratings</p>
<h2 className='text-3xl font-bold'>{ratingAvg}</h2>
</div>
<div>
   
<img  className='w-[40px]'  src="https://i.ibb.co.com/YT3XZWcL/Vector-2.png" alt="" />
  

<p className='my-2' >Average Ratings</p>
<h2 className='text-3xl font-bold '>{ratingAvg}</h2>
</div>

  </div>

        </div>
        <button className=" text-white px-4 py-2 rounded-lg hover:opacity-100 transition btn lg:mt-3 mt-7 btn-soft  bg-[#00D390] ">Install Now ({size} MB)</button>

        </div>
        </div>
        <div className="divider divider-start p-10"></div>
        </div>
    );
};

export default AppDetails;