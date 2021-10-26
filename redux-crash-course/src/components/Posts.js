import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

const Posts = (props) => {
    useEffect(() => {
        props.fetchPosts();
        props.posts.push(props.newPost)
        console.log(props.posts)
    }, [props.newPost]);

    const postItems = props.posts.map(post => (
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

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts);



