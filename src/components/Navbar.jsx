import './style.css'
import './style.mobile.css'
import { RiMenu3Fill } from 'react-icons/ri'
import { NavSlider } from './NavSlider'
import { useState } from 'react'

export function Navbar () {

    const [ open, setOpen ] = useState(false)

    function contact () {
        window.location.href = 'mailto:artistmanagementinquiries@gmail.com'
    }

    return (
        <div className='navbar'>
            {
                open
                ?
                <NavSlider setOpen={setOpen} />
                :
                <></>
            }

            <div className='navlogo'>Cooper Alan</div>

            <div className='nav-items'>
                <a href='#home'>Home</a>
                <a href='#story'>Story</a>
                <a href='#releases'>Releases</a>
                <a href='#shows'>Shows</a>
            </div>

            <button onClick={contact}>Get in Touch</button>

            <div className='menu-icon' onClick={() => setOpen(true)}>
                <RiMenu3Fill />
            </div>
        </div>
    )
}