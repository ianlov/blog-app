import { useEffect, useState } from "react";

const user = "test user";

const NewPost = () => {
  const [post, setPost] = useState({
    title: "",
    author: "",
    image_url: "",
    content: ""
  })

  useEffect(() => {
    setPost({
      ...post,
      author: user
    })
  }, [])

  const handleSubmit = (ev) => {
    ev.preventDefault();
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
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          name="content" 
          placeholder="Content"
          onChange={handleChange}
        />
        <input 
          name="image_url"
          placeholder="Image Link"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default NewPost;