import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
export const Works = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>
          Works for all these
        </span>
        <span>Brands and Clients</span>
        <span>
          lorem Ipsum is simply dummy <br />
          text of the printing and typesetting industry
          <br />
          lorem Ipsum is simply dummy text of the printing.
          <br />
          text of the printing and typesetting industry
        </span>

        <button className="button s-button">Hire me</button>

        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>

      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
        </div>
        {/*background */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}
