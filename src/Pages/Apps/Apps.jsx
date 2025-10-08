import React, { Suspense } from 'react';
import App from './App';
import { HiH2 } from 'react-icons/hi2';
import { Link } from 'react-router';

const Apps = ({data}) => {
    
    return (
        <div>
            <div className='text-center mt-10'>
  <h1 className='text-4xl font-bold '>Trending Apps</h1>
            <p className='text-[14px] my-4 text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>
          
            <div>
                <Suspense fallback={<h2>app is loading</h2>}>
                <div className='grid grid-cols-4 gap-10 p-20 '>
 {
                    data.map(singleApp=><App key={singleApp.id} singleApp={singleApp}></App>)
                }
               
                </div>
    
<Link to='/All'>        <div className='flex justify-center items-center mb-7'>   <button className="btn bg-linear-to-l w-[130px] mr-2 from-[#9F62F2] to-[#632EE3] p-6 ">Show All</button></div> 
</Link>
                </Suspense>

            </div>
           
        </div>
    );
};

export default Apps;