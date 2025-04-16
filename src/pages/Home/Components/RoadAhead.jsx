import '../style.css'
import '../style.mobile.css'
import img2 from '/images/Cooper-Alan-Performance-2.webp'


export function RoadAhead () {
    return (
        <div className='section-2'>
            <div> The Road Ahead: Just Getting Started </div>

            <div className='section-2-cnt'>
                <div>

                    More music. Bigger stages. Deeper stories.

                    Cooper Alan is just scratching the surface. With new singles lined up, collabs on the horizon, and his next major tour taking shape, the ride is far from over.

                    He’s rewriting the rules. He’s walking his own path. And he’s bringing millions along for the ride.

                    Cooper Alan isn’t waiting for a seat at the table—he’s building his own damn stage.

                    <button>Get In Touch</button>
                </div>

                <div>
                    <img src={img2} />
                </div>
            </div>

        </div>
    )
}