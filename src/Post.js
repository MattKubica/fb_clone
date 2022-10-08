import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
function Post({profilePicture,image,username,timestamp,message}) {

  return (
    <div className='post'>
        <div className="post__top">
        <Avatar src={profilePicture}
        className="post__avatar"/>
        <div className="post__topInfo">
            <h3>{username}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}...</p>
        </div>
        </div>
        <div className="post__bottom">
          {message}
          </div>
          <div className='post__image'>
          <img src={image} alt=""/>
          </div>
          
          <div className="post__options">
            <div className="post__option">
              <ThumbUpAltRoundedIcon/>
              <p>Like</p>
            </div>
            <div className="post__option">
              <CommentRoundedIcon/>
              <p>Comment</p>
            </div>
            <div className="post__option">
              <SendRoundedIcon/>
              <p>Share</p>
            </div>
            <div className="post__option">
              <ManageAccountsRoundedIcon/>
              <ExpandMoreRoundedIcon/>
            
          </div>
        

        </div>
    </div>
  )
}

export default Post