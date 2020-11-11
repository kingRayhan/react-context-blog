import React, { useContext, useState, useEffect } from 'react'
import { BlogContext } from '../contexts/BlogContextProvider'

const Single = ({ match }) => {
    let { getPost } = useContext(BlogContext)
    let postId = match.params.postid

    let [post, setPost] = useState({})

    useEffect(() => {
        setPost(getPost(postId))
    },[postId,getPost])

    let { title, body } = post

    return (
        <div>
            <h1>{title} </h1>
            <p>{body}</p>
        </div>
    )
}

export default Single
