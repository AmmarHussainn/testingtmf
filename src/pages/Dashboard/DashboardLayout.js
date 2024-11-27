import React, { useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import { Outlet, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const DashboardLayout = () => {
  const navigate = useNavigate();
  const params =
    window.location.pathname.split('/')[
      window.location.pathname.split('/').length - 1
    ];

  useEffect(() => {
    if(params == "dashboard")
    navigate('home', { replace: true });
  }, [navigate]);
  return (
    <div className='w-full h-[100vh] flex overflow-hidden'>
      <div className='w-[20%]'>
        <Sidebar />
      </div>
      <div className='w-[80%]'>
        <Outlet />
      </div>
    </div>
  );
};
