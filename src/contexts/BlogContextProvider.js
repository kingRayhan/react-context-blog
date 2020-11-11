import React, { createContext, useState } from 'react'
import uuid from 'uuid/v4'
export const BlogContext = createContext()

const BlogContextProvider = ({ children }) => {
    let [posts, setPosts] = useState([
        {
            userId: 1,
            id: 1,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body:
                'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        },
        {
            userId: 1,
            id: 2,
            title: 'qui est esse',
            body:
                'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
        },
        {
            userId: 1,
            id: 3,
            title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
            body:
                'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
        },
        {
            userId: 1,
            id: 4,
            title: 'eum et est occaecati',
            body:
                'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
        },
        {
            userId: 1,
            id: 5,
            title: 'nesciunt quas odio',
            body:
                'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
        },
    ])

    let postCount = posts.length

    const addPost = (title, body) => {
        let post = {
            id: uuid(),
            title,
            body,
        }
        setPosts([post, ...posts])
    }

    const deletePost = id => {
        setPosts(posts.filter(post => post.id !== id))
    }

    const getPost = id => {
        return posts.find(post => post.id === id)
    }

    const updatePost = (id, post) => {
        let index = posts.findIndex(post => post.id === id)
        posts[index] = post
        setPosts(posts)
    }

    return (
        <BlogContext.Provider value={{ posts, postCount, addPost, deletePost, getPost, updatePost }}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider
