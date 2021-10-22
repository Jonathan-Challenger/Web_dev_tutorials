const Postform = () => {
    return (
        <div>
            <h1>Add Post</h1>
            <form>
                <div>
                    <label>Title: </label><br />
                    <input type="text" name="title" />
                </div>
                <br />
                <div>
                    <label>Body: </label><br />
                    <textarea name="body" />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Postform
