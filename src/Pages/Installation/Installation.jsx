import React, { useEffect, useState } from 'react';


const Installation = () => {
    ;
       const [install,setInstall]=useState([]);
       useEffect(()=>{
const savlinked=JSON.parse(localStorage.getItem('installation')) || [];
if(savlinked) setInstall(savlinked)
       },[])
    return (
        <div className='bg-gray-100 p-24'>
            <div className='text-center'>    <h1 className='text-6xl font-bold'>Your Installed Apps</h1>
     <p className='my-3 text-gray-500'>Explore All Trending Apps on the Market developed by us</p></div>
     <div className='flex justify-between'>
        <h1 className='text-3xl font-bold'>{install.length} Apps Found</h1>
        <select defaultValue="Pick a text editor" className="select select-primary w-[130px]">
  <option disabled={true}>Sort By Size</option>
  <option>VScode</option>
  <option>VScode fork</option>
  <option>Another VScode fork</option>
</select>
     </div>

     {
        install.map(i=> <div  key={i.id}  className='flex gap-5 bg-white p-3 rounded-2xl mt-3 '>
        <div>
<img src={i.image} className='w-[100px] rounded-2xl h-[100px] ' alt="" />
        </div>
        <div  className='flex justify-between items-center w-[100%]    '>
          <div>      <h1>Forest: Focus for Productivity</h1>
         <div className='flex gap-4'>
            <div className='flex'> <img  className='w-[20px]' src="https://i.ibb.co.com/5Cc4KH9/fi-18110198.png" alt="" />
            <p className='text-gray-500'>download</p> </div>
           <div className='flex text-gray-500'>   <img  className='w-[20px]'  src="https://i.ibb.co.com/chZm3xPz/Vector-4.png" alt="" />
            <p className='text-gray-500'>{i.ratingAvg}</p></div>
          
            <p className='text-gray-500'>{i.size}MB</p>
         </div> </div>
          

  <button className="btn btn-success">uninstall</button>


        </div>

    </div>)
     }
  <div>
   


  </div>
 
        </div>
    );
};

export default Installation;