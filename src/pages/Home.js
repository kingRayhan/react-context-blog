import React, { useContext } from 'react'
import { BlogContext } from '../contexts/BlogContextProvider'
import PostCard from '../conponents/PostCard'

const Home = () => {
    let { posts, postCount } = useContext(BlogContext)

    return (
        <>
            <h1>Total Posts: {postCount}</h1>

            {posts.map(post => {
                delete post.userId
                return <PostCard key={post.id} {...post} />
            })}
        </>
    )
}

export default Home
