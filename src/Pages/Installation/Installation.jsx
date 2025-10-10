import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';


const Installation = () => {
    ;
       const [install,setInstall]=useState([]);
       const [sortOrder,setSortOrder]=useState('none');
       useEffect(()=>{
const savlinked=JSON.parse(localStorage.getItem('installation'))|| [];
if(savlinked) setInstall(savlinked)
       },[])
const shortItem=(()=>{
   if(sortOrder === 'downloads-asc' ){

      return [...install].sort((a,b)=>a.downloads-b.downloads)
   }

 else if(sortOrder === 'downloads-desc'){
  return [...install].sort((a,b)=>b.downloads-a.downloads)
 }
 else {
   return install
 }
})()
const uninstall = id =>{
toast ("✅Successfully Uninstalled ")
const existingList=JSON.parse(localStorage.getItem('installation'))
let updateList=existingList.filter(i=>i.id !== id)
setInstall(updateList)
 localStorage.setItem('installation', JSON.stringify(updateList));
}





    return (
      
        <div className='bg-gray-100 lg:p-24 p-10'>
              <ToastContainer position="top-right" autoClose={3000} />
            <div className='text-center'>    <h1 className='lg:text-6xl font-bold text-2xl'>Your Installed Apps</h1>
     <p className='my-3 text-gray-500 ext-[16px] text-[13px] '>Explore All Trending Apps on the Market developed by us</p></div>
     <div className='flex lg:flex-row flex-col  justify-between'>
        <h1 className='lg:text-3xl text-[16px]  font-bold'>{shortItem.length} Apps Found</h1>
        <select 
    value={sortOrder}  
    onChange={e => setSortOrder(e.target.value)}  
    className="select select-primary w-[130px]"
>
    <option disabled value='none'>Sort By Downloads</option>
    <option value='downloads-asc'>Low-High</option>
    <option value='downloads-desc'>High-Low</option>
</select>

     </div>

     {
       shortItem.map(i=> <div  key={i.id}  className='flex lg:flex-row flex-col gap-5 bg-white lg:p-3 rounded-2xl mt-3 '>
        <div className='flex items-center lg;mt-0 mt-2 justify-center'>
<img src={i.image} className='w-[100px] rounded-2xl h-[80px]  ' alt="" />
        </div>
        <div  className='flex lg:flex-row flex-col justify-between items-center w-[100%]    '>
          <div>      <h1 className='lg:text-xl font-semibold my-2'> {i.title} </h1>
         <div className='flex lg:flex-row flex-col gap-1 lg:gap-4'>
            <div className='flex'> <img  className='w-[20px]' src="https://i.ibb.co.com/5Cc4KH9/fi-18110198.png" alt="" />
            <p className='text-gray-500 lg:text-[16px] text-[13px]'>{i.downloads}</p> </div>
           <div className='flex text-gray-500'>   <img  className='w-[20px]'  src="https://i.ibb.co.com/chZm3xPz/Vector-4.png" alt="" />
            <p className='text-gray-500  lg:text-[16px] text-[13px]'>{i.ratingAvg}</p></div>
          
            <p className='text-gray-500  lg:text-[16px] text-[13px]'>{i.size}MB</p>
         </div> </div>
          

  <button onClick={()=>uninstall(i.id)} className="btn btn-success w-[70px] h-[30px] mb-2">Uninstall</button>


        </div>

    </div>)
     }
  <div>
   


  </div>
 
        </div>
    );
    
};

export default Installation; 