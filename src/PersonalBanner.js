import { Avatar } from '@mui/material'
import React from 'react'
import HeroList from './HeroList'
import "./PersonalBanner.css"


function PersonalBanner() {

function Hyperlink(){
    window.open("https://www.linkedin.com/in/mat%C3%BA%C5%A1-kubica-b06944195")
}
    
  return (
    <div className='personalBanner'>
        <div className="personalBanner__card">
            <div className="personalBanner__top">
                <img 
                alt='linkedIn__image'
                src='https://www.purestorage.com/content/dam/purestorage/logos/New%20Customer/LinkedInlogo-1.png.imgw.720.720.jpg'/>
            </div>
            <div className="personalBanner__info">
                <Avatar className='personalBanner__avatar'
                src={HeroList.id1.profilePicture}
                />
                <h3>Matúš Kubica</h3>
                <div className="underName">
                <p>{HeroList.id1.proffesion}</p>
                <p>Front-End Developer</p>
                </div>
                    <button className="personalBanner__button"
                    onClick={Hyperlink}>View Profile</button>
            </div>
            <div className="personalBanner__link"></div>
        </div>
    </div>
  )
}

export default PersonalBanner