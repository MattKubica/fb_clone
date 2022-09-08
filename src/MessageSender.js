import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import "./MessageSender.css"
import VideoCameraFrontRoundedIcon from '@mui/icons-material/VideoCameraFrontRounded';
import PhotoSizeSelectActualRoundedIcon from '@mui/icons-material/PhotoSizeSelectActualRounded';
import AddReactionRoundedIcon from '@mui/icons-material/AddReactionRounded';
import HeroList from './HeroList.js';

function MessageSender() {
  const [input, setInput] = useState("")
  const [imageUrl, setImageUrl] =useState("")

    const handleSubmit = e =>{
        e.preventDefault();
        setInput("")
        setImageUrl("")
    }


  return (
    <div className='messageSender'>
        <div className='messageSender__top'>
            <Avatar src={HeroList.id1.profilePicture}/>
            <form>
            <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input" 
            placeholder={`What’s On Your Mind`} 
            type="text"></input>
            <input 
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="messageSender__url" 
            placeholder='Image URL (Optional)' 
            type="text"></input>
            <button className='messageSender__button' onClick={handleSubmit} type="submit"></button>
            </form>
        </div>
        <div className='messageSender__bottom'>
        <div className='messageSender__option'>
        <VideoCameraFrontRoundedIcon style={{color: "red"}}/>
        <h3>Live Video</h3>
        </div>
        <div className='messageSender__option'>
        <PhotoSizeSelectActualRoundedIcon style={{color: "green"}}/>
        <h3>Photo/Video</h3>
        </div>
        <div className='messageSender__option'>
        <AddReactionRoundedIcon style={{color: "orange"}}/>
        <h3>Feeling/Activity</h3>
        </div>
        </div>
    </div>
  )
}

export default MessageSender