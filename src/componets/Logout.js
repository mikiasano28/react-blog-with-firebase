import { signInWithPopup, signOut } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebase';
import { useNavigate  } from 'react-router-dom';

function Logout({ setIsAuth }) {
  const navigate = useNavigate();
  const logoutHandler = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    })
  };

  return (
    <div>
      <p>Logout</p>
      <button onClick={logoutHandler}>Logout with Goolge</button>
    </div>
  )
}

export default Logout;
