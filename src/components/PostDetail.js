import React from 'react'

const PostDetail=({post})=> {
  if(!post) { 
 return <div>selecione um post para ver os detalhes</div>
 }
    return (
    <div> 
        <h2>{post.title}</h2>
        <p> {post.body}</p>
    </div>
  )
}

export default PostDetail