const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

let blogs = [];
let nextId = 1;

app.get("/blogs", (req, res) => {
  res.json(blogs);
});
app.post("/blogs", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({
      error: "Title and description are required",
    });
  }

  const newBlog = { id: nextId++, title, description };
  blogs.push(newBlog);
  res.status(201).json(newBlog);
});

app.put("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const blog = blogs.find((b) => b.id === parseInt(id));
  if (!blog) {
    return res.status(404).json({ error: "Blog not found" });
  }

  if (title) blog.title = title;
  if (description) blog.description = description;
  res.json(blog);
});

app.delete("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const blogIndex = blogs.findIndex((b) => b.id === parseInt(id));
  if (blogIndex === -1) {
    return res.status(404).json({ error: "Blog not found" });
  }
  const detetedBlog = blogs.splice(blogIndex, 1);
  res.json({ message: "Blog Deleted successfully", deleted: deleteBlog[0] });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}/blogs`);
});
