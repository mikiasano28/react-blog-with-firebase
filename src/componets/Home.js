import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase.js'; 
import './Home.css';


function Home() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      // console.log(data);
      // console.log(data.docs);
      // // expand document and use data function on firestore
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPosts();
  }, []);

  return (
    <div className='homepage'>
      {postList.map((post) => {
        return (
          <div className='postContents' key={post.id}>
          <div className='postHeader'>
            <h1>{post.title}</h1>
          </div>
          <div className='postTextContainer'>{post.postsText}</div>
          <div className='nameAndDeleteButton'>
            <h3>@{post.author.userName}</h3>
            <button>Delete</button>
          </div>
        </div>  
        )
      })}
    </div>
  )
}

export default Home;
