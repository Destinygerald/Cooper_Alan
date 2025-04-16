import '../style.css'
import '../style.mobile.css'
import img1 from '/images/Cooper-Alan-Performance.webp'

export function LiveShows () {
    return (
        <div className='live-shows' id='shows'>
            <div> Live Shows: Country Thunder With a Rock Show Soul </div>

            <div className='live-shows-cnt'>
                <div className='live-shows-img'>
                    <img src={img1} /> 
                </div>

                <div>
                    On stage, Cooper is electric.

                    He sings. He jokes. He jumps. He connects. His shows feel like a mix between a country concert and the world’s best tailgate. Whether it’s a sold-out theater or a pop-up at a festival, Cooper gives 100%.

                    He’s sold over 85,000 tickets and counting, and his performances have earned him a reputation as one of the most exciting independent acts in the country.

                    And in 2022, he hit a lifelong milestone—his debut on the Grand Ole Opry stage. Country music’s most sacred ground welcomed him with open arms.
                </div>
            </div>
        </div>
    )
}