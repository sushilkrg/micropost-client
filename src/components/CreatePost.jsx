import React, { useRef, useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { POST_API_ENDPOINT } from '../utils/constant';
import axios from 'axios';

const CreatePost = () => {

    const [postContent, setPostContent] = useState("");
    const [postImg, setPostImg] = useState(null);
    const imgRef = useRef(null);

    const user = useSelector(store => store?.user?.user);

    const postCreate = async () => {

        try {
            const res = await axios.post(`${POST_API_ENDPOINT}/create`, { postContent, postImg, user: user?._id }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
                body: JSON.stringify({ postContent, postImg }),
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     postCreate({ postContent, postImg });
    // };

    const handleImgChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPostImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="bg-gray-800 p-4 rounded mb-4">
            <div className="flex flex-col" >
                <div className="flex ">

                    <div >
                        <img src={user.profileImg || "https://cdn.pixabay.com/photo/2023/05/18/13/40/cristiano-ronaldo-8002334_1280.png"}
                            alt="ProfileImg"
                            className="rounded-full w-12 h-12  md:mb-0 md:mr-4" />
                        {/* <img
                            src="https://cdn.pixabay.com/photo/2023/05/18/13/40/cristiano-ronaldo-8002334_1280.png"
                            alt="ProfileImg"
                            className="rounded-full w-12 h-12  md:mb-0 md:mr-4"
                        /> */}
                    </div>
                    <input
                        type="text"
                        placeholder="What's happening?"
                        className="w-full p-2 bg-gray-700 rounded"
                        onChange={(e) => setPostContent(e.target.value)}
                    />
                </div>
                <div className="flex justify-between">
                    <div className='flex gap-1 items-center'>
                        <CiImageOn
                            className='fill-primary w-6 h-6 cursor-pointer'
                            onClick={() => imgRef.current.click()}
                        />
                        <BsEmojiSmileFill className='fill-primary w-5 h-5 cursor-pointer' />
                    </div>
                    <input type="file" accept='image/*' hidden ref={imgRef} onChange={handleImgChange} />
                    <button className="mt-2 bg-[#0e7490] px-4 py-2 rounded " onClick={postCreate}>Post</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;