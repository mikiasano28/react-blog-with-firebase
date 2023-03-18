import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { db } from '../firebase.js'; 
import './Home.css';


function Home() {
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      console.log(data);
    }
    getPosts();
  }, []);

  return (
    <div className='homepage'>
      <div className='postContents'>
        <div className='postHeader'>
          <h1>Title</h1>
        </div>
        <div className='postTextContainer'>
          This is my blog... Bla bla bla bla....
        </div>
        <div className='nameAndDeleteButton'>
          <h3>@mikiasano</h3>
          <button>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Home;
