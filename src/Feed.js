import React from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import HeroList from './HeroList'

function Feed() {
  return (
    <div className='feed'>
        <StoryReel/>
        <MessageSender/>
        <Post
        message="Whats new ? "
        image="https://th.bing.com/th/id/OIP.hDX2VnhEx_ki-XjHTwDGfQHaE7?pid=ImgDet&rs=1"
        username={HeroList.id1.firstName +" "+ HeroList.id1.lastName}
        
        />
        <Post 
        message="360 no scope is nuts"
        image="https://th.bing.com/th/id/OIP.6DXq5Jb2ebw7ZpQdOo6YcQHaHa?pid=ImgDet&rs=1"
        username={HeroList.id2.firstName + " " + HeroList.id2.lastName}/>
        <Post 
        message="I guess my train is late AF"
        image="https://th.bing.com/th/id/R.de8394bc513de919c8e5d26b03096c68?rik=KJxC1lfR6t94eA&pid=ImgRaw&r=0"
        username={HeroList.id3.firstName + " " + HeroList.id3.lastName}/>


    </div>
  )
}

export default Feed