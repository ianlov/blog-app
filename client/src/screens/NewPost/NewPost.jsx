import { useEffect, useState } from "react";
import { createPost } from "../../services/post.js"

const user = "test user";

const NewPost = () => {
  const [post, setPost] = useState({
    title: "",
    author: "",
    image_url: "",
    content: ""
  })
  const [created, setCreated] = useState(false)

  useEffect(() => {
    setPost({
      ...post,
      author: user
    })
  }, [])

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const created = await createPost(post)
    setCreated({ created })
  }

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setPost({
      ...post,
      [name]: value
    })
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input 
          className="input-title"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <input
          className="input-content"
          name="content" 
          placeholder="Content"
          onChange={handleChange}
          required
        />
        <input 
          className="input-image"
          name="image_url"
          placeholder="Image Link"
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default NewPost;