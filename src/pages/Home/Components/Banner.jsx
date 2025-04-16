import '../style.css'
import '../style.mobile.css'
import bg_img from '/images/Cooper-Alan.jpg'

export function Banner () {

    function explore () {
        window.location.href = '#story'
    }

    return (
        <div className='banner' id='home'>
            <div className='banner-bg'>
                <img src={bg_img} />
            </div>

            <div className='banner-cnt'>
                <div> Cooper Alan </div>

                <div>
                    The Unstoppable Rise of Country’s Digital Outlaw
                    Cooper Alan isn’t your average country artist. He didn’t break through the traditional way. He didn’t wait for Nashville’s greenlight or play by the old rules. He used grit, authenticity, and a cell phone camera—and turned the music world on its head.
                    From small-town North Carolina to streaming millions and selling out shows across the country, Cooper’s rise is a story of hustle, humor, and heart. He’s proof that in today’s world, being yourself is the most powerful brand you can build.
                </div>

                <button onClick={explore}> Explore </button>
            </div>
        </div>
    )
}