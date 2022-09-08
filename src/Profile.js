import React from 'react'
import ProfileRow from './ProfileRow'
import HeroList from './HeroList'

function Profile() {
  return (
    <ProfileRow 
    title={HeroList.id1.firstName + " " + HeroList.id1.lastName}
    src={HeroList.id1.profilePicture}/>
  )
}

export default Profile