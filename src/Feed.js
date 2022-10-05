import React, {useEffect, useState} from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import { getPosts,db } from './firebase'
import { collection, doc, onSnapshot } from 'firebase/firestore'


function Feed() {
//  const [posts,setPosts] = useState([]); 
const postsResult =  getPosts(db).then(post => console.log(post[1].message));

/*useEffect(() =>{
    onSnapshot(collection(db,"posts"),(snapshot) => (
     setPosts(snapshot.docs.map((doc => ({id: doc.id, data: doc.data() })))
     )
    ))
   },[])

   */
  return (
    <div className='feed'>
          <StoryReel/>
        <MessageSender/>
      {posts.map((item) =>(
        <Post
        key={item.id}
        profilePic={item.profilePic}
        message={item.message}
        timestamp={item.timestamp}
        username={item.username}
        image={item.image}
        />
        ))}


        </div>
  )
}
export default Feed