import './App.css';
import profile from "./images/profile__img.jpeg"
import ReactTooltip from 'react-tooltip';
import icon from './images/Icon.png'
import zuri from './images/zuri.png'
import i4g from "./images/I4G.png"
import dots from './images/dots.png'
import slack from "./images/slack.png"
import github from './images/github.png'

function App() {
  return (
    <div className='container'>
      <section className="content">
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
            <a href="https://books.zuri.team/python-for-beginners?ref_id=Great-Okafor" id='book__python' target="_blank" rel="noreferrer">
              <li>Python Books</li>
            </a>
            <a href="https://background.zuri.team" id='pitch' target="_blank" rel="noreferrer">
              <li>Background Check for Coders</li>
            </a>
            <a href="https://books.zuri.team/design-rules" id='book__design' target="_blank" rel="noreferrer">
              <li>Design Books</li>
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
      </section>

      <footer>
        <div>
          <img src={zuri} alt="" />

          <small>HNG Internship 9 Frontend Task</small>

          <img src={i4g} alt="" />

        </div>
      </footer>
    </div>
  );
}

export default App;
