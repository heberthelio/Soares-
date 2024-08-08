import  { useState, useEffect} from "react";
import axios from "axios";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";

const App =() => {
  const[posts, setPosts]=useState([])
  const[selectedPost, setSelectedPost] = useState(null)
  
  useEffect(()=>{
    const fetchPosts = async () =>{
      try{ 
    
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(res.data)
      } catch(e){
        console.log(e, 'erro ao renderizar posts')

      }
    }
    fetchPosts()
  }, [])
const handleSelectPost= (post) =>{
  setSelectedPost(post)
}

  return (
    <div >
      <PostList posts={posts} oneSelectPost={handleSelectPost} />
      <PostDetail posts={ selectedPost} />
    </div>
  );
}

export default App;
