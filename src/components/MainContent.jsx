import React from 'react';
import PostCard from './PostCard';
import CreatePost from './CreatePost';
import Posts from './Posts';
// import Post from './Post';

const MainContent = () => {
  return (
    <div className="w-full lg:w-1/2 p-4 bg-gray-900 text-white h-auto min-h-screen overflow-y-scroll no-scrollbar">
      <CreatePost />
      <Posts />
    </div>
  );
};

export default MainContent;
