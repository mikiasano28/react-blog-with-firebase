import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebase';
import { useNavigate  } from 'react-router-dom';

const  Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginHandler = () => {
    // login with google
    signInWithPopup(auth, provider).then((result) => {
      // use useState to check now you are login or not... and store it to local storage...
      // console.log(result);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    })
  };

  return (
    <div>
      <p>Login</p>
      <button onClick={loginHandler}>Login with Goolge</button>
    </div>
  )
}

export default Login;
