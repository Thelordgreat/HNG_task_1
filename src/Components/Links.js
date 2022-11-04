import React from 'react'
import ReactTooltip from 'react-tooltip';
import slack from "../images/slack.png"
import github from '../images/github.png'

const Links = () => {
    return (
        <div>
            <div className="bottom">
                <ul>
                    <a href="https://twitter.com/thelordgreat?t=BZDI67vlfrVZQgpv4uwBzg&s=09" target="_blank" rel="noreferrer" id='twitter'>
                        <li>Twitter Link</li>
                    </a>
                    <a href="https://training.zuri.team/" id='btn__zuri' target="_blank" rel="noreferrer">
                        <li>Zuri Team</li>
                    </a>
                    <a href="http://books.zuri.team" id='books' target="_blank" rel="noreferrer">
                        <li data-tip='Books on design and coding'>Zuri Books</li>
                    </a>
                    <a href="https://books.zuri.team/python-for-beginners?ref_id=Great-O" id='book__python' target="_blank" rel="noreferrer">
                        <li>Python Books</li>
                    </a>
                    <a href="https://background.zuri.team" id='pitch' target="_blank" rel="noreferrer">
                        <li>Background Check for Coders</li>
                    </a>
                    <a href="https://books.zuri.team/design-rules" id='book__design' target="_blank" rel="noreferrer">
                        <li>Design Books</li>
                    </a>
                    <a href="/contact" id='contact'>
                        <li>Contact Me</li>
                    </a>
                    <ReactTooltip />
                </ul>
            </div>
            <div className='socials'>
                <a href="great">
                    <img src={slack} alt="" />
                </a>
                <a href="https://github.com/Thelordgreat" target="_blank" rel="noreferrer">
                    <img src={github} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Links