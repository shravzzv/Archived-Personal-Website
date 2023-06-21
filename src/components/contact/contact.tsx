import React from 'react'
import syles from './contact.module.css'

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Phone</p>
      <p>+91 insert non-personal phone here</p>
      <p>Address</p>
      <p>Insert Address here</p>
      <p>Email</p>
      <p>email@professional.com</p>

      <form>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <input type='text' placeholder='Subject' />
        <textarea placeholder='Message'></textarea>
        <button type='submit'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact
