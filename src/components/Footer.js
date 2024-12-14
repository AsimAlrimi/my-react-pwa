import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the Adventure
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe at any time
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' placeholder='Your Email' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>subscribe</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to=''>Testimonials</Link>
                    <Link to=''>Careers</Link>
                    <Link to=''>Asim</Link>
                    <Link to=''>Alrimi</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to=''>Testimonials</Link>
                    <Link to=''>Careers</Link>
                    <Link to=''>Asim</Link>
                    <Link to=''>Alrimi</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to=''>Testimonials</Link>
                    <Link to=''>Careers</Link>
                    <Link to=''>Asim</Link>
                    <Link to=''>Alrimi</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to=''>Testimonials</Link>
                    <Link to=''>Careers</Link>
                    <Link to=''>Asim</Link>
                    <Link to=''>Alrimi</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to=''>Testimonials</Link>
                    <Link to=''>Careers</Link>
                    <Link to=''>Asim</Link>
                    <Link to=''>Alrimi</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                     Innovia <i className='fab fa-typo3'></i>
                    </Link>
                </div>
                <small className='website-rights'TRVL> © 2024</small>
                <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
                
            </div>
            </div>
        </section>
    </div>
  )
}

export default Footer