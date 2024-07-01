// import { FaRegComment } from "react-icons/fa";
// import { BiRepost } from "react-icons/bi";
// import { FaRegHeart } from "react-icons/fa";
// import { FaRegBookmark } from "react-icons/fa6";
// import { FaTrash } from "react-icons/fa";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Post = ({ post }) => {

//     // todo remove this, for testing only
//     const postOwner = useSelector(store => store.user.user)

//     const handleDeletePost = () => {
//         // deletePost();
//     };

//     const handlePostComment = (e) => {
//         e.preventDefault();
//         // if (isCommenting) return;
//         // commentPost();
//     };

//     const handleLikePost = () => {
//         // if (isLiking) return;
//         // likePost();
//     };

//     return (

//         <div className='flex gap-2 items-start p-4 border-b border-gray-700'>
//             <div className='avatar'>
//                 <Link to={`/profile/${postOwner?.username}`} className='w-8 rounded-full overflow-hidden'>
//                     <img src={postOwner?.profileImg || "/avatar-placeholder.png"} />
//                 </Link>
//             </div>
//             <div className='flex flex-col flex-1'>
//                 <div className='flex gap-2 items-center'>
//                     <Link to={`/profile/${postOwner?.username}`} className='font-bold'>
//                         {postOwner?.fullName}
//                     </Link>
//                     <span className='text-gray-700 flex gap-1 text-sm'>
//                         <Link to={`/profile/${postOwner?.username}`}>@{postOwner?.username}</Link>
//                         <span>·</span>
//                         {/* <span>{formattedDate}</span> */}
//                     </span>
//                     {/* {isMyPost && ( */}
//                     {(
//                         <span className='flex justify-end flex-1'>
//                             {/* {!isDeleting && ( */}
//                                 <FaTrash className='cursor-pointer hover:text-red-500' onClick={handleDeletePost} />
//                             {/* )} */}

//                             {/* {isDeleting && <LoadingSpinner size='sm' />} */}
//                         </span>
//                     )}
//                 </div>
//                 <div className='flex flex-col gap-3 overflow-hidden'>
//                     <span>{post?.text}</span>
//                     {/* {post.img && ( */}
//                         <img
//                             src={post?.img}
//                             className='h-80 object-contain rounded-lg border border-gray-700'
//                             alt=''
//                         />
//                     {/* )} */}
//                 </div>
//                 <div className='flex justify-between mt-3'>
//                     <div className='flex gap-4 items-center w-2/3 justify-between'>

//                         <div className='flex gap-1 items-center group cursor-pointer'>
//                             <BiRepost className='w-6 h-6  text-slate-500 group-hover:text-green-500' />
//                             <span className='text-sm text-slate-500 group-hover:text-green-500'>0</span>
//                         </div>
//                         <div className='flex gap-1 items-center group cursor-pointer' onClick={handleLikePost}>
//                             {/* {isLiking && <LoadingSpinner size='sm' />} */}
//                             {/* {!isLiked && !isLiking && ( */}
//                                 <FaRegHeart className='w-4 h-4 cursor-pointer text-slate-500 group-hover:text-pink-500' />
//                             {/* )} */}
//                             {/* {isLiked && !isLiking && ( */}
//                                 <FaRegHeart className='w-4 h-4 cursor-pointer text-pink-500 ' />
//                             {/* )} */}

//                             <span
//                                 // className={`text-sm  group-hover:text-pink-500 ${isLiked ? "text-pink-500" : "text-slate-500"
//                                 //     }`}
//                             >
//                                 {post?.likes?.length}
//                             </span>
//                         </div>
//                     </div>
//                     <div className='flex w-1/3 justify-end gap-2 items-center'>
//                         <FaRegBookmark className='w-4 h-4 text-slate-500 cursor-pointer' />
//                     </div>
//                 </div>

//             </div>
//         </div>

//     );
// };
// export default Post;