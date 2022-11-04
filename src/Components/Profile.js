import React from 'react'
import profile from "./../images/profile__img.jpeg"
import icon from './../images/Icon.png'
import dots from './../images/dots.png'

const Profile = () => {
    return (
        <div>
            <div className='top'>
                <div>
                    <div id='profile__img'>
                        <img src={profile} alt="" />
                    </div>
                    <div className='name'>Great Okafor</div>
                    {/* <p>Great O.</p> */}
                </div>

                <div className='icon arrow' data-tip='Share profile'>
                    <img src={icon} alt="" className='arrow' />
                </div>
                <div className='icon dot'>
                    <img src={dots} alt="" className='arrow' />
                </div>
            </div>
        </div>
    )
}

export default Profile