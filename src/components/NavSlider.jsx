import './style.css'
import './style.mobile.css'
import { BsX } from 'react-icons/bs'


export function NavSlider ({ setOpen }) {

    function contact () {
        window.location.href = 'mailto:artistmanagementinquiries@gmail.com'
    }

    function close () {
        setOpen(false)
    }

    return (
        <div className='nav-slider'>
            <span className='exit' onClick={() => setOpen(false)}> <BsX /> </span>

            <div className='nav-slider-cnt'>
                <a onClick={close} href='#home'>Home</a>
                <a onClick={close} href='#story'>Story</a>
                <a onClick={close} href='#releases'>Releases</a>
                <a onClick={close} href='#shows'>Shows</a>
            </div>

            <button onClick={contact}>Get In Touch</button>
        </div>
    )
}