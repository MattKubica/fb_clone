import { Avatar } from '@mui/material'
import React from 'react'
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
                onClick={Hyperlink}
                src='https://media-exp1.licdn.com/dms/image/C4E03AQHBdNrjYzPQAQ/profile-displayphoto-shrink_800_800/0/1663952505469?e=1669248000&v=beta&t=fS0HGmA4LcB5lFHhDNN2WfG1dnab6YzjLekmruprUOQ'                />
                <h3>Matúš Kubica</h3>
                <div className="underName">
                <p>Junior</p>
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