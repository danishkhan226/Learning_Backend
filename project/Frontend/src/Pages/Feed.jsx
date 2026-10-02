import { useState, useEffect } from "react"
import axios from "axios"

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
       setPosts(res.data.post)
      })
      .catch((err) => {
        console.error("Error fetching posts:", err)
      })
  }, [])

  return (
    <section className="feed-section">
      {posts.map((post) => (
        <div key={post._id} className="post-card">
          <img src={post.Img_URL} alt={post.Caption} className="Img" />
          <p>{post.Caption}</p>
        </div>
      ))}
    </section>
  )
}

export default Feed
