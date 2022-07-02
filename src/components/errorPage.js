import React from 'react'
import {Link} from 'react-router-dom'
import './error.css'

export default function ErrorPage() {
  return (
    <div className='error'>
      <section className='max'>
        <img src="images/deadend.png" alt="" />
        <h3>404 - Page Not Found</h3>
        <Link to="/">Go to HOMEPAGE</Link>
      </section>
    </div>
  )
}
