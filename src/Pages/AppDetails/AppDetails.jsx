import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useApps from '../../Hooks/useApps';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppDetails = () => {
  const { id } = useParams();
  const { data, loading } = useApps();

  const [isInstalled, setIsInstalled] = useState(false);
  const [appdata, setAppdata] = useState(null);


  useEffect(() => {
    if (data && data.length > 0) {
      const app = data.find(a => a.id === Number (id));
      setAppdata(app);

      const installedList = JSON.parse(localStorage.getItem('installation')) || [];
      const alreadyInstalled = installedList.some(p => p.id === app?.id);
      if (alreadyInstalled) setIsInstalled(true); 
    }
  }, [data, id]);

  if (loading) return <p>Loading...</p>;
  if (!appdata) return <p>App not found</p>;

  const { title, image, companyName, downloads, ratingAvg, size } = appdata;

  const handleInstall = () => {
    const installedList = JSON.parse(localStorage.getItem('installation')) || [];
    const duplicate = installedList.some(p => p.id === appdata.id);

    if (!duplicate) {
      installedList.push(appdata);
      localStorage.setItem('installation', JSON.stringify(installedList));
      setIsInstalled(true); 
      toast.success(`${title} installed successfully!`);
    } else {
      toast.info(`${title} is already installed`);
    }
  };

  return (
    <div className='bg-gray-100 p-10'>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
     


      <div className='flex lg:flex-row flex-col items-center gap-9'>
        <div>
          <img className='w-[300px] h-[290px]' src={image} alt={title} />
        </div>
        <div className='w-full'>
          <h1 className='text-3xl font-bold my-2'>{title}</h1>
          <p className='text-gray-500'>
            Developed by{' '}
            <span className='bg-linear-to-l font-semibold mr-2 from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent'>
              {companyName}
            </span>
          </p>
          <div className="divider divider-start"></div>

          <div className='flex gap-16'>
            <div>
              <p className='my-2'>Downloads</p>
              <h2 className='text-3xl font-bold'>{downloads}</h2>
            </div>
            <div>
              <p className='my-2'>Average Ratings</p>
              <h2 className='text-3xl font-bold'>{ratingAvg}</h2>
            </div>
            <div>
              <p className='my-2'>Size</p>
              <h2 className='text-3xl font-bold'>{size} MB</h2>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`text-white px-4 py-2 rounded-lg hover:opacity-100 transition btn mt-7 ${
              isInstalled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390]'
            }`}
          >
            {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
