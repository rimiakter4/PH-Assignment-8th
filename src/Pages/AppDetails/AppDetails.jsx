import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useApps from '../../Hooks/useApps';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

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




  if (loading) return  <p>loading data ..</p>
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
            
            className={`text-white px-4 py-2 rounded-lg hover:opacity-100 transition btn mt-7 ${
              isInstalled ? 'bg-[#00D390] cursor-not-allowed' : 'bg-[#00D390]'
            }`}
          >
            {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
          </button>
        </div>
      
      </div>
      
       <div className="divider divider-start"></div>
       <div>
   <h1 className='text-2xl font-bold'>Rating</h1>
   <div className='' style={{ width: '100%', height: 450 }}>
    <ResponsiveContainer width="100%" height={400}>
  <BarChart
    layout="vertical"  
    data={appdata.ratings} 
    margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis type="number" /> 
    <YAxis dataKey="name" type="category" />  
    <Tooltip />
    <Legend />
    <Bar dataKey="count" fill="#8884d8" />
  </BarChart>
</ResponsiveContainer>
    
   


       </div>
         <div className="divider divider-start"></div>
         <div>
          <h1 className='text-xl font-bold'>Description</h1>
          <p className='text-gray-500'>
            Focus helps you work smarter and stay productive using the proven Pomodoro technique. It lets you set custom work and break sessions, track your daily progress, and manage tasks in one clean, distraction-free space.

With detailed focus stats, motivational streaks, and calming background sounds, Focus keeps you in rhythm — helping you stay consistent, avoid burnout, and achieve more every day. Whether you’re studying, coding, or working remotely, Focus is your personal productivity coach that keeps you disciplined, refreshed, and fully in control.
          </p>
          <p className='text-gray-500 mt-5'>A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
</p>
<p className='text-gray-500 mt-5'>
  For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
</p>
         </div>


</div>


    </div>
  );
};

export default AppDetails;

