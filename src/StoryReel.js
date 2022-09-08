import React from 'react'
import Story from './Story'
import "./StoryReel.css"
import HeroList from './HeroList'

function StoryReel() {
  return (
    <div className='storyReel'>
        <Story 
        image={HeroList.id1.storyPicture}
        profilePicture={HeroList.id1.profilePicture}
        title={HeroList.id1.firstName + " " + HeroList.id1.lastName}/>
        <Story 
        image={HeroList.id2.storyPicture}
        profilePicture={HeroList.id2.profilePicture}
        title={HeroList.id2.firstName + " " + HeroList.id2.lastName}/>
        <Story 
        image={HeroList.id3.storyPicture}
        profilePicture={HeroList.id3.profilePicture}
        title={HeroList.id3.firstName + " " + HeroList.id3.lastName}/>
        <Story 
        image={HeroList.id4.storyPicture}
        profilePicture={HeroList.id4.profilePicture}
        title={HeroList.id4.firstName + " " + HeroList.id4.lastName}/>
        <Story 
        image={HeroList.id5.storyPicture}
        profilePicture={HeroList.id5.profilePicture}
        title={HeroList.id5.firstName + " " + HeroList.id5.lastName}/>
    </div>
  )
}

export default StoryReel