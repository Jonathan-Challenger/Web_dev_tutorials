import { useEffect, useState } from "react"

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            const postsFromServer = await fetchPosts()
            setPosts(postsFromServer)
        }

        getPosts()
    }, [])

    const fetchPosts = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        return data
    }

    const postItems = posts.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ));

    return (
        <div>
            <h1>Posts</h1>
            {postItems}
        </div>
    )
}

export default Posts



