import React, { Suspense } from 'react';
import App from './App';
import { HiH2 } from 'react-icons/hi2';
import { Link } from 'react-router';
import Loader from '../Loader/Loader';

const Apps = ({data}) => {
    
    return (
        <div >
            <div className='text-center mt-10'>
  <h1 className='text-4xl font-bold '>Trending Apps</h1>
            <p className='text-[14px] my-4 text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>
          
            <div >

                {/* <Suspense fallback={<span className="loading loading-bars loading-md"></span>

}> */}
                <div className='grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-4 p-3.5 lg:p-20 '>
 {
  
                    data.slice(0, 8).map(singleApp=><App key={singleApp.id} singleApp={singleApp}></App>)
                }
               
                </div>
    
<Link to='/All'>        <div className='flex justify-center items-center mb-7'>   <button className="btn bg-linear-to-l w-[130px] mr-2 from-[#9F62F2] to-[#632EE3] p-6 ">Show All</button></div> 
</Link>
                {/* </Suspense> */}

            </div>
           
        </div>
    );
};

export default Apps;