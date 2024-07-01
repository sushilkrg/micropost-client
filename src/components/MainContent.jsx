import React from 'react';
import PostCard from './PostCard';
import CreatePost from './CreatePost';
import Posts from './Posts';
// import Post from './Post';

const MainContent = () => {
  return (
    <div className="w-full lg:w-1/2 p-4 bg-gray-900 text-white h-auto lg:h-screen overflow-y-scroll no-scrollbar">
      {/* <div className="bg-gray-800 p-4 rounded mb-4">
        <input
          type="text"
          placeholder="What's happening?"
          className="w-full p-2 bg-gray-700 rounded"
        />
        <button className="mt-2 bg-blue-500 px-4 py-2 rounded">Tweet</button>
      </div> */}
     <CreatePost/>
     <Posts/>
     {/* <Post/> */}
    </div>
  );
};

export default MainContent;
