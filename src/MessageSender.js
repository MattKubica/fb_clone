import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import "./MessageSender.css"
import VideoCameraFrontRoundedIcon from '@mui/icons-material/VideoCameraFrontRounded';
import PhotoSizeSelectActualRoundedIcon from '@mui/icons-material/PhotoSizeSelectActualRounded';
import AddReactionRoundedIcon from '@mui/icons-material/AddReactionRounded';
import {useStateValue} from "./StateProvider"
import {db} from "./firebase"
import firebase from 'firebase/compat/app';


function MessageSender() {
  const [{ user }, dispatch] =useStateValue();
  const [input, setInput] = useState("")
  const [imageUrl, setImageUrl] =useState("")

    const handleSubmit = e =>{
        e.preventDefault();

        db.collection("posts").add({
          message:input,
          timestamp: firebase.firestore.fieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })

        setInput("")
        setImageUrl("")
    }

  return (
    <div className='messageSender'>
        <div className='messageSender__top'>
            <Avatar src={user.photoURL}/>
            <form>
            <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input" 
            placeholder={`What’s On Your Mind,${user.displayName}`} 
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