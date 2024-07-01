import { useDispatch } from "react-redux";
import { POST_API_ENDPOINT } from "../utils/constant";
import { useEffect } from "react";
import axios from "axios";
import { getAllPosts } from "../redux/postSlice";

const useGetPosts = () => {
  const dispatch = useDispatch();
  let followingUsersPosts;
  let allOtherPosts;
  let allPosts;

  const fetchFollowingUsersPosts = async () => {
    try {
      const res = await axios.get(`${POST_API_ENDPOINT}/following`, {
        withCredentials: true,
      });
      console.log(res?.data);
      //   dispatch(getAllPosts(res?.data));
      followingUsersPosts = res?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllPosts = async () => {
    try {
      const res = await axios.get(`${POST_API_ENDPOINT}/all`, {
        withCredentials: true,
      });
      console.log(res?.data);
      allOtherPosts = res?.data;

      // todo - merging problem now
      allPosts = { ...followingUsersPosts, ...allOtherPosts };
      // dispatch(getAllPosts(allPosts));
      dispatch(getAllPosts(allOtherPosts));
      console.log(allOtherPosts);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    // fetchFollowingUsersPosts();
    fetchAllPosts();
  }, []);
};

export default useGetPosts;
