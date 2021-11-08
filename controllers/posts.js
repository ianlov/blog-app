import Post from '../models/post.js'

export const getPosts = async (req, res) => {
    try {
        const post = await Post.find()
        res.json(post)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.json(post)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const createProject = async (req, res) => {
  try {
      const post = new Post(req.body)
      await post.save()
      res.status(201).json(post)
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}

export const updateProject = async (req, res) => {
  try {
      const { id } = req.params
      const post = await Post.findByIdAndUpdate(id, req.body, { new: true })
      res.status(200).json(post)
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}

export const deleteProject = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Post.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Post deleted")
      }
      throw new Error("Post not found")
  } catch (error) {
      res.status(500).send(error.message)
  }
}