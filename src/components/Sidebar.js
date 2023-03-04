import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar=()=>{
    const isMenuOpened=useSelector(mystore=>mystore.app.isMenuOpen);
    if(!isMenuOpened)
     return null;
    return (
        <div className='w-60 h-96 shadow-lg my-20'>
            <ul className='p-4 m-2'>
                <Link to={"/"}><li>Home</li></Link>
                <li>Shorts</li>
                <li>Subscription</li>
            </ul>
        </div>
    );
}

export default Sidebar;