import React from 'react'
import NavBar from '../navBar/navBar'
import "./overview.css"
import arrow from "../../asstes/images/Vector.png"
import thumbnail from "../../asstes/images/Rectangle 28.png"

const Overview = () => {
    return (
        <div>
            <NavBar />
            <div className='myCourseMargin'>
                <div className='path'>
                    <div className='myCoursePath'>My Course&nbsp;&nbsp;</div>
                    <img src={arrow} alt="image" className='arrow'/>
                    <div className='ongoingPath'> &nbsp;&nbsp;Ongoing</div>
                </div>
                <div >
                    <div>
                    <img src={thumbnail} alt="image" className='thumbnailVideo'/>
                    <div>Learn Figma - UI/UX Design Essential Training</div>
                    <div>7 Chapter | 46 lessons</div>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
