import { useSelector } from "react-redux";
import store from "../redux/store";
import { Link } from "react-router-dom";

const MyProfile = () => {
    const { user } = useSelector(store => store.user);
    console.log(user);
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
                    <p className='px-2 '>Posts: 19</p>
                    <p className='px-2'>Following: {user?.following?.length}</p>
                    <p className='px-2'>Followers: {user?.followers?.length}</p>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default MyProfile;