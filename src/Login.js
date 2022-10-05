import React from 'react'
import "./Login.css"
import useFirebase from './useFirebase';

function Login() {
  const handleSignIn = useFirebase();
  return (
    <div className='login'>
        <div className="login__logo">
            <img 
            src='https://freepngimg.com/download/facebook/62487-bluetie-icons-computer-facebook-login-icon-email.png'
            alt=''/>
            <img
            src='https://th.bing.com/th/id/R.7a16375bb54e58c93f99353420bebf24?rik=51Ub1Bjz0Bh03w&riu=http%3a%2f%2fpngimg.com%2fuploads%2ffacebook_logos%2ffacebook_logos_PNG19749.png&ehk=oca1BavUvaPb6pE5FdtOV3Qa%2fRkiL%2foW4ne%2bh3GZrnU%3d&risl=&pid=ImgRaw&r=0'
            alt=''/>
        </div>
        <button 
        onClick={()=>handleSignIn()}
        className='login__button' 
        >Login</button>
    </div>
  )
}

export default Login