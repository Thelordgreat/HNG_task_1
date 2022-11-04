import React from 'react'
import zuri from '../images/zuri.png'
import i4g from "../images/I4G.png"

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={zuri} alt="" />
                <small>HNG Internship 9 Frontend Task</small>
                <img src={i4g} alt="" />
            </div>
        </footer>
    )
}

export default Footer