import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import { Card } from '../Card/Card'
import { themeContext } from '../../Context'
import { useContext } from 'react'

export const Services = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="services" id="Services">
      {/*left side*/}
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
        <span>Services</span>
        <span>
          lorem Ipsum is simply dummy text of the printing and typesetting
          industry
          <br />
          lorem Ipsum is simply dummy text of the printing.
        </span>
        <a href="" download>
          <button className="button s-button">Download</button>
        </a>
        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>
      {/*right side*/}
      <div className="cards">
        <div style={{ left: '14rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={'Figma, Sketch, Adobe'}
          />
        </div>
        {/*second card */}
        <div style={{ top: '12rem', left: '-4rem' }}>
          <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={'HTML, CSS,JAVASCRIPT, REACT'}
          />
        </div>
        {/*third card */}
        <div style={{ top: '19rem', left: '12rem' }}>
          <Card
            emoji={Humble}
            heading={'UI/UX'}
            detail={' lorem Ipsum is simply dummy text of the printing.'}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: 'var(--purple)' }}
        ></div>
      </div>
    </div>
  )
}
