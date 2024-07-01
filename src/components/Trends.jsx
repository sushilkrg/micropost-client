import React from 'react';

const Trends = () => {
  return (
    <div className="w-full lg:w-1/4 p-4 bg-gray-900 text-white h-auto lg:h-screen">
      <div className="bg-gray-800 p-4 rounded-lg mb-4 ">
        <h3 className="text-lg mb-2 font-bold	">Trending News</h3>
        <div className="mb-4">
          <p>Weekly Tech Recap: Meta AI makes India debut, Google Translate adds support for 7 new Indian languages ↗</p>
        </div>
        <div className="mb-4">
          <p>Oppo says AI will be at the centre of Reno 12 and Reno 12 Pro.↗</p>
        </div>
        <div className="mb-4">
          <p>Google buys stake in Taiwan solar power firm owned by BlackRock.↗</p>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg mb-4 ">
        <h3 className="text-lg mb-2 font-bold	">What your friends follow</h3>
        <div className="mb-4">
          <p>Website redesigns</p>
          <p>1.1M Posts</p>
        </div>
        <div className="mb-4">
          <p>Backend Development</p>
          <p>10M Posts</p>
        </div>
        <div className="mb-4">
          <p>Open source</p>
          <p>560K Posts</p>
        </div>
        <div className="mb-4">
          <p>React dev</p>
          <p>5M Posts</p>
        </div>
      </div>
    </div>
  );
};

export default Trends;
