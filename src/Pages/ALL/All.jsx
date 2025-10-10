import React, { useState } from 'react';

import App from '../Apps/App';
import useApps from '../../Hooks/useApps';
import notApp from '../../assets/App-Error.png'
import { Link } from 'react-router';

const All = () => {

    const {data}=useApps();
    const [search,setSearch]=useState('');
    const term=search.trim().toLocaleLowerCase();
    const searchData=term?data.filter(dat=>dat.title.toLocaleLowerCase().includes(term)):data




    return (
     
            <div >
                    <div className='text-center mt-10'>
  <h1 className='lg:text-5xl text-xl  font-bold '>Our All Applications</h1>
            <p className='lg:text-[16px] text-[12px] text-gray-400 my-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center p-16
            '>
<h1 className='font-semibold lg:text-2xl'>({searchData.length}) Apps Found</h1>
<label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input value={search} onChange={(e)=>setSearch(e.target.value)} type='search' required placeholder="search Apps" />
</label>

            </div>
     

      <div className='lg:p-16 p-8'>
        {term && searchData.length === 0 ? (
          <div className='  justify-center items-center  mt-10'>
      <div className='flex justify-center items-center'>
 <img className='w-[400px] ' src={notApp} alt="" />
      </div>
          
        
   <h1 className='text-4xl mt-4 font-semibold text-center'>OPPS!! APP NOT FOUND</h1>
        <p className='text-gray-500 text-center mt-4'>   The App you are requesting is not found on our system.  please try another apps</p>
        <Link to='/'>
        
          <div className='flex items-center justify-around '>   <button className="btn bg-linear-to-l w-[130px] mr-2 from-[#9F62F2] to-[#632EE3] p-6 my-4 ">Go Back</button></div>
        </Link>

           </div>
         
                            

 

         
        ) : (
          <div className='grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-6'>
            {searchData.map(singleApp => (
              <App key={singleApp.id} singleApp={singleApp}></App>
             
            ))}
          </div>
        )}
      </div>




                </div> 

    //  </div>
    );
};

export default All;