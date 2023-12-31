import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { themeContext } from '../../Context'
import { useContext } from 'react'
export const Contact = () => {
  const form = useRef()
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_z4bpfpu',
        'template_vxgmrxq',
        form.current,
        '9Rmv9-BSfBAKah0-i'
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="contact-form" id="Contact">
      {/*left side*/}
      <div className="c-left">
        <div className="contact">
          <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
          <span>Contact me</span>
          <div className="blur c-blur1" style={{ background: 'skyblue' }}></div>
        </div>
      </div>
      {/*right side*/}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="send" className="button" />
          <span>{done && 'Thanks for contacting me!'}</span>
          <div
            className="blur c-blur2"
            style={{ background: 'var(--purple)' }}
          ></div>
        </form>
      </div>
    </div>
  )
}
