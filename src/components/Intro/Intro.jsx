import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
export const Intro = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? 'white' : '' }}>Hi! I Am </span>
          <span>Joudi Kriem</span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div className="floating-div" style={{ top: '-4%', left: '68%' }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div className="floating-div" style={{ top: '18rem', left: '1rem' }}>
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        {/*blur*/}
        <div className="blur" style={{ background: 'rgba(238 210 255)' }}></div>
        <div
          className="blur"
          style={{
            background: ' #C1f5ff ',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
          }}
        ></div>
      </div>
    </div>
  )
}
