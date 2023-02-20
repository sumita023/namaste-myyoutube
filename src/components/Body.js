import React from 'react';
import Sidebar from './Sidebar';
// import MainContainer from './Maincontainer';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        {/* <MainContainer/> */}
        {/* <watchPage/> */}
        <Outlet/> 
    </div>
  )
}

export default Body