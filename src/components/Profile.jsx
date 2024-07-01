import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useProfile from '../hooks/useProfile';
import axios from 'axios';
import { POST_API_ENDPOINT, USER_API_ENDPOINT } from '../utils/constant';
import PostCard from './PostCard';
import { followingUpdate } from '../redux/userSlice';
import { getRefresh } from '../redux/postSlice';
import toast from 'react-hot-toast';

const Profile = () => {

  const { username } = useParams();
  useProfile(username);
  const { user, profile } = useSelector(store => store.user);
  const [userPosts, setUserPosts] = useState([]);
  const dispatch = useDispatch();
  // const profile = [];

  const getUserPosts = async () => {
    try {
      const res = await axios.get(`${POST_API_ENDPOINT}/user/${username}`, {
        withCredentials: true,
      });

      console.log(res?.data);
      setUserPosts(res?.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserPosts();
  }, [username]);

  const followAndUnfollowHandler = async () => {
    // if (profile?.followers?.includes(user?._id)) {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(`${USER_API_ENDPOINT}/follow/${profile?._id}`);
      console.log(res);
      toast.success(res?.data?.message);
      dispatch(followingUpdate(profile?._id));
      dispatch(getRefresh());
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    // }
  }

  return (
    <div className="w-full lg:w-1/2 p-4 bg-gray-900 text-white h-auto lg:h-screen overflow-y-scroll no-scrollbar">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1>Profile page</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src="https://cdn.pixabay.com/photo/2023/05/18/13/40/cristiano-ronaldo-8002334_1280.png"
            alt="Profile"
            className="rounded-full w-32 h-32 mb-4 md:mb-0 md:mr-4"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">{profile?.fullName}</h2>
            <h4 className="font-bold text-gray-500 text-sm">@{profile?.username}</h4>
            <p className="text-gray-400">{profile?.bio}</p>
            <div className="flex justify-between">
              <div className="mt-4">
                <p>Posts: {userPosts?.length > 0 ? userPosts.length : '0'}</p>
                <p>Following: {profile?.following?.length}</p>
                <p>Followers: {profile?.followers?.length}</p>
              </div>
              <div className=" flex items-center justify-between">
                {
                  profile?._id === user?._id ? (
                    // <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400'>Edit Profile</button>
                    <button className='ml-12 px-4 py-1 hover:bg-gray-700 rounded-full border border-gray-400'>Edit Profile</button>

                  ) : (
                    <button onClick={followAndUnfollowHandler} className='ml-12 px-4 py-1 bg-black text-white rounded-full'>{profile?.followers?.includes(user?._id) ? "Following" : "Follow"}</button>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg mb-2">Recent Posts</h3>
        {userPosts?.length === 0 && "This user has not posted anything yet."}
        {userPosts?.map((post) => (
          <PostCard post={post} />
        ))}
        {/* <div className="bg-gray-700 p-4 rounded mb-4">
            <p>Entrepreneur</p>
            <p>“Embrace your inner warrior, rise above the negativity, and stay focused on your goals.”</p>
          </div> */}
      </div>
    </div>
  );
};

export default Profile;
