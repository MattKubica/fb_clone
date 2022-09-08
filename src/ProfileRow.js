import { Avatar } from '@mui/material'
import React from 'react'
import "./ProfileRow.css"

function ProfileRow({ src, Icon, title }) {
  return (
    <div className='profileRow'>
      {src && <Avatar src={src}/>}
      {Icon && <Icon/>}
        <h4>{title}</h4>
    </div>
  )
}

export default ProfileRow