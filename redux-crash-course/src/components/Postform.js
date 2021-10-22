import { useState } from "react"

const Postform = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title || !body) {
            alert("Please fill in all fields")
            return
        }

        const newPost = {
            title,
            body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
        .then(res => res.json())
        .then(data => console.log(data))

        setTitle('')
        setBody('')
    }

    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title: </label><br />
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title}/>
                </div>
                <br />
                <div>
                    <label>Body: </label><br />
                    <textarea name="body" onChange={(e) => setBody(e.target.value)} value={body}/>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Postform
