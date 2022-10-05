import { app } from "./firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React from 'react'
import { useStateValue } from "./StateProvider";
import { actionTypes }from "./reducer"

function useFirebase() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [state, dispatch] = useStateValue();
    const handleSignIn = () => {
        signInWithPopup(auth, provider)
    .then((result) => {
      dispatch({
        type: actionTypes.SET_USER,
        user:result.user,
      })
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })

    };
    return handleSignIn
  
}

export default useFirebase