import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { USER_API_ENDPOINT } from "../utils/constant";
import { getMyProfile } from "../redux/userSlice";

const useProfile = (username) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${USER_API_ENDPOINT}/profile/${username}`, {
          withCredentials: true,
        });
        console.log(res?.data);
        dispatch(getMyProfile(res?.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, [username]);
};

export default useProfile;
