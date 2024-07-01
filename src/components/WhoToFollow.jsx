import { useSelector } from "react-redux";
import useOtherUsers from "../hooks/useOtherUsers";
import store from "../redux/store";
import { Link } from "react-router-dom";

const WhoToFollow = () => {

  useOtherUsers();

  const otherUsers = useSelector(store => store.user.otherUsers);
  console.log(otherUsers);

  return (
    <div className="mt-8">
      <div className="bg-gray-800 p-4 rounded-lg mb-4 ">
        <h3 className="text-lg mb-2">Who to follow</h3>
        <div className="flex flex-col space-y-3">

          {otherUsers?.map((otherUser) => {
            return (
              <div key={otherUser?.id} className="flex items-center justify-between">
                <div className="flex">
                  <img src={otherUser?.profileImg ? `${otherUser.profileImg}` : "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRvri27lmIFqUw6WxR0_vpLz2QsWOCTyU7erVSbQb2LsTd74CntJNRDfnZtaKG4-rqFOUly7qOpJAdeHjY"} alt="Profile" className="rounded-full w-10 h-10 mr-2 " />
                  <div className="flex flex-col">
                    <h4 className="text-sm">{otherUser?.fullName}</h4>
                    <p className="text-sm text-gray-400">@{otherUser.username}</p>
                  </div>
                </div>
                <Link to={`/profile/${otherUser?.username}`}>
                  <button className="bg-[#0e7490] px-2 py-1 rounded-xl text-sm">Profile</button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
};

export default WhoToFollow;