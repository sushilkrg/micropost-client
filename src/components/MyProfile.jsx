import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { POST_API_ENDPOINT } from "../utils/constant";

const MyProfile = () => {
    const { user } = useSelector(store => store.user);
    // console.log(user);

    const username = user?.username;
    const [userPosts, setUserPosts] = useState([]);

    const getUserPosts = async () => {
        try {
            const res = await axios.get(`${POST_API_ENDPOINT}/user/${user?.username}`, {
                withCredentials: true,
            });

            // console.log(res?.data);
            setUserPosts(res?.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserPosts();
    }, [username]);
    return (
        <div className="bg-gray-800 p-4 rounded-lg mb-4 ">
            <div className="flex flex-col items-center">
                <img src={(user?.profileImg) ? `${user?.profileImg}` : "https://cdn.pixabay.com/photo/2023/05/18/13/40/cristiano-ronaldo-8002334_1280.png"} alt="Profile" className="rounded-full w-20 h-20 mb-4" />
                <Link to={`/profile/${user?.username}`}>
                    <h2 className="text-xl">{user?.fullName}</h2>
                </Link>
                <h4 className="text-sm text-gray-400">@{user?.username}</h4>
                <p className="text-gray-400 text-center text-sm pt-2">{user?.bio}</p>
                {/* <div className='flex '> */}
                <div className="mt-4 flex  text-sm text-gray-300">
                    <p className='px-2 '>Posts: {userPosts?.length > 0 ? userPosts.length : '0'}</p>
                    <p className='px-2'>Following: {user?.following?.length}</p>
                    <p className='px-2'>Followers: {user?.followers?.length}</p>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default MyProfile;