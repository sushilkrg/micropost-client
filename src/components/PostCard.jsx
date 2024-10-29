import axios from 'axios';
import React, { useEffect } from 'react'
import { FaRegBookmark, FaRegComment, FaRegHeart } from 'react-icons/fa';
import { MdDelete, MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { getRefresh } from '../redux/postSlice';
import { POST_API_ENDPOINT } from '../utils/constant';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const PostCard = ({ post }) => {

    const { user } = useSelector(store => store.user);
    const dispatch = useDispatch();
    // console.log(post);

    const likeOrDislikeHandler = async (id) => {
        try {
            const res = await axios.post(`${POST_API_ENDPOINT}/like/${id}`, { id: user?._id }, {
                withCredentials: true
            })
            // console.log(res);
            dispatch(getRefresh());
            toast.success(res?.data?.message);
        } catch (error) {
            toast.error(error?.response?.data?.error);
            console.log(error);
        }
    }

    const deletePostHandler = async (id) => {
        try {
            axios.defaults.withCredentials = true;
            const res = await axios.delete(`${POST_API_ENDPOINT}/${id}`);
            // console.log(res);
            dispatch(getRefresh());
            toast.success(res?.data?.message);
        } catch (error) {
            toast.error(error?.response?.data?.error);
            console.log(error);
        }
    }

    return (
        <div className="bg-gray-800 p-4 rounded mb-4 flex space-x-1">
            <img
                src={post?.user?.profileImg ? `${post?.user?.profileImg}` : "https://media.cnn.com/api/v1/images/stellar/prod/230621042149-01-cristiano-ronaldo-euro-200-apps-062023-restricted.jpg?c=original"}
                // alt={`${username} avatar`}
                className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <div className='flex flex-row justify-between'>
                            <div className="flex flex-col">
                                <Link to={`/profile/${post?.user?.username}`}>
                                    <div className="text-lg font-bold ml-2">{post?.user?.fullName}</div>
                                </Link>
                                <div className="text-gray-400 text-sm ml-2">@{post?.user?.username}</div>
                            </div>
                            <div className="text-gray-400 text-sm ml-12">1h ago</div>
                        </div>
                    </div>
                    {/* <div className="flex space-x-1 items-center"> */}
                    {/* <div className="text-gray-400 cursor-pointer"><MdDelete /></div> */}
                    {/* </div> */}
                    {
                        user?._id === post?.user?._id && (
                            <div onClick={() => deletePostHandler(post?._id)} className='flex items-center'>
                                <div className='p-2 hover:bg-red-300 rounded-full cursor-pointer'>
                                    <MdOutlineDeleteOutline size="24px" />
                                </div>
                            </div>
                        )
                    }
                </div>
                <p className="mt-4">{post?.postContent}</p>
                {post?.postImg && <div className='py-3'>
                    <img className="w-full h-full md:h-[350px]" src={post?.postImg} alt="image" />
                </div>}

                {/* like, bookmark, comment   */}
                <div className='flex justify-between mt-6'>
                    <div className='flex gap-4 items-center w-2/3 justify-between'>
                        <div onClick={() => likeOrDislikeHandler(post?._id)} className='flex w-1/3 justify-end gap-2 items-center'>
                            <FaRegHeart className='w-4 h-4 text-slate-500 hover:scale-125 hover:fill-red-500 rounded-full cursor-pointer ' /><p>{post?.likes?.length > 0 ? post?.likes?.length : '0'}</p>
                        </div>
                        <div className='flex w-1/3 justify-end gap-2 items-center'>
                            <FaRegComment className='w-4 h-4 text-slate-500 cursor-pointer' />
                        </div>
                        <div className='flex w-1/3 justify-end gap-2 items-center'>
                            <FaRegBookmark className='w-4 h-4 text-slate-500 cursor-pointer ' />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default PostCard;