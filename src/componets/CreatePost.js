import React, { useState } from 'react';
import "./CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase.js";
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();

  const navigate = useNavigate();

  const createPostHander = async () => {
    // console.log(title);
    // console.log(postText);

    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    });

    navigate("/");
  }

  return (
    <div className='createPostPage'>
      <div className='postContainer'>
        <h1>Write your blog here!</h1>
        <div className='inputPost'>
          <div>Title</div>
          <input 
            type="text" 
            placeholder="Write your title" 
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='inputPost'>
          <div>Blog</div>
          <textarea 
            placeholder="Write your blog" 
            onChange={(e) => setPostText(e.target.value)}>
          </textarea>
        </div>
        <button className='postButton' onClick={createPostHander}>Post!</button>
      </div>
    </div>
  )
}

export default CreatePost;