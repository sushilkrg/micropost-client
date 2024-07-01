import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOtherUsers } from "../redux/userSlice";

const useOtherUsers = () => {
  const dispatch = useDispatch();
  const fetchOtherUsers = async () => {
    try {
      const res = await axios.get(`${USER_API_ENDPOINT}/suggested`, {
        withCredentials: true,
      });
      console.log(res.data);
      dispatch(getOtherUsers(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOtherUsers();
  }, []);
};

export default useOtherUsers;
