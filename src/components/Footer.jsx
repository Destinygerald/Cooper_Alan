import './style.css'
import './style.mobile.css'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import { RiInstagramFill } from 'react-icons/ri'
import { useState } from 'react'


export function Footer () {
    
    function socials (link) {
        window.location.href = link
    }

    return (
        <div className='footer' id='contact'>
            <div className='footer-main'>


                <div className='footer-nav'>
                    <div>
                        <a href='#early-life'>Kid-Rock's Life</a>
                        <a href='#albums'>Albums</a>
                        <a href='#culture'>Cultural Impact</a>
                    </div>

                    <div>
                        <a href='#legacy'>Kid-Rock's Legacy</a>
                        <a href='#philanthropy'>Philanthropy</a>
                        <a href='#shows'>Life Shows</a>
                    </div>

                    <div>                
                        <a href='#values'>Values and Quotes</a>
                        <a href='#fun-facts'>Fun Facts</a>
                    </div>
                </div>


                <div className='footer-contacts'>
                    <div>Follow for the latest updates.</div>
                    <div>
                        <span onClick={() => socials('http://facebook.com/@CooperAlanMusic')}> <FaFacebook /> </span>
                        <span onClick={() => socials('http://instagram.com/@cooperalanmusic')}> <RiInstagramFill /> </span>
                        <span onClick={() => socials('http://twitter.com/kidrock')}> <RiTwitterXFill /> </span>
                        <span onClick={() => socials('http://youtube.com/c/Cooper Alan')}> <FaYoutube />  </span>
                    </div>
                </div>
            
            </div>

            <div className='footer-copyrights'>
                CopyRight © 2025. All rights reserved.
            </div>
        </div>
    )
}