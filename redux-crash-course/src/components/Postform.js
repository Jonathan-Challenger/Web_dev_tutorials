import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";

const Postform = (props) => {
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

        props.createPost(newPost);

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

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Postform)
