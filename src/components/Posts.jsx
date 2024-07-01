import React, { useState } from 'react'
import useGetPosts from '../hooks/useGetPosts'
import PostCard from './PostCard';
import { useSelector } from 'react-redux';

const Posts = () => {

    // custom hooks to get all posts for feed
    useGetPosts();

    const [allPosts, setAllPosts] = useState([]);

    const { posts } = useSelector(store => store.post);
    // setAllPosts(posts);
    console.log(allPosts);
    console.log(posts);
    return (
        <div>
            {/* {Object.entries(posts)?.map((post) => <PostCard key={post?._id} post={post[1]} />)} */}
            {(posts)?.map((post) => <PostCard key={post?._id} post={post} />)}
            {/* <PostCard />
            <PostCard />
            <PostCard /> */}
        </div>
    )
}

export default Posts