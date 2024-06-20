import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/Logo .svg';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt='' />
                    <p>We are a family owned Mediterranean restaurant</p>
                </div>
                <div>
                    <h3>Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservation</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/>1234 Pune, India</li>
                        <li>Phone: <br/>+9123344555</li>
                        <li>Email: <br/>littlelemon15@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Follow Us</h3>
                    <ul className='social-media'>
                        <li><a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
                        <li><a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
                        <li><a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faTwitter} /></a> Twitter</li>
                    </ul>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
