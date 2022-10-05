
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyDyJkWatML42_xYYm7WzEfqs9XbJym2vkA",
  authDomain: "fb-clone-831fc.firebaseapp.com",
  projectId: "fb-clone-831fc",
  storageBucket: "fb-clone-831fc.appspot.com",
  messagingSenderId: "387683150255",
  appId: "1:387683150255:web:f027d5e86b427a0e50a75a",
  databaseURL: "https://DATABASE_NAME.europe-west1.firebasedatabase.app.firebaseio.com"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getPosts(){
  const postsCol = collection(db, 'posts');
  const postsSnapshot = await getDocs(postsCol);
  // no-original const postsList = postsSnapshot.docs.map(doc =>({id: doc.id, data: doc.data()}))
  const postsList = postsSnapshot.docs.map(doc => doc.data());
return postsList;
}
export {db, app, getPosts};