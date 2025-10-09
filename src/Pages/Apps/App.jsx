import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const App = ({ singleApp}) => {
const {image,title,downloads,ratingAvg,id}=singleApp;
    return (
        <div>
      <Link to ={`/AppDetails/${id}`}>
   <div className="card bg-base-100  shadow-sm p-">
  <figure>
    <img className='w-full rounded-t-4xl rounded-b-4xl lg:h-[300px] h-[200px] p-5'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
   {title}
   
    </h2>
   
    <div className="card-actions justify-between">
      <div className="badge bg-[#F1F5E8] text-[#00D390]"><MdOutlineFileDownload />{downloads}</div>
      <div className="badge  bg-[#FFF0E1] text-[#FF8811]"><FaStar />{ratingAvg}</div>
    </div>
  </div>
</div>
      </Link>
      
         
        </div>
    );
};

export default App;