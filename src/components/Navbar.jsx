import './style.css'
import './style.mobile.css'
import { RiMenu3Fill } from 'react-icons/ri'

export function Navbar () {
    return (
        <div className='navbar'>
            <div className='navlogo'>Cooper Alan</div>

            <div className='nav-items'>
                <a>link1</a>
                <a>link2</a>
                <a>link3</a>
                <a>link4</a>
            </div>

            <button>Get in Touch</button>

            <div className='menu-icon'>
                <RiMenu3Fill />
            </div>
        </div>
    )
}