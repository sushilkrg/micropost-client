import React from 'react';
import WhoToFollow from './WhoToFollow';
import MyProfile from './MyProfile';

const Sidebar = () => {
  return (
    <div className="w-full lg:w-1/4 p-4 bg-gray-900 text-white h-auto lg:h-screen">
      <MyProfile/>
      <WhoToFollow/>
    </div>
  );
};

export default Sidebar;
