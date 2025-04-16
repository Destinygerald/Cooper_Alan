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
                        <a href='#home'>Home</a>
                        <a href='#story'>Story</a>
                        <a href='#releases'>Releases</a>
                    </div>

                    <div>
                        <a href='#shows'>Shows</a>
                        <a href='#fun-facts'>Fun Facts</a>
                        <a href='#fan-connect'>Fan Connect</a>
                    </div>

                    <div>                
                        <a href='#whats-more'>What's More?</a>
                        <a href='#albums'>Albums</a>
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