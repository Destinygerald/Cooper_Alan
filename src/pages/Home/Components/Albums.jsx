import '../style.css'
import '../style.mobile.css'

const Singles = [
    `“New Normal” (2020): A song that captured pandemic-era anxiety with a hopeful tone. Over 26 million streams on Spotify alone.`,
	`“Tough Ones” (2021): A tribute to resilience, families, and those who fight through storms.`,
	`“Can’t Dance” (2021): A hilarious yet relatable anthem for every guy trying to impress on the dance floor.`,
	`“Colt 45 (Country Remix)” (2021): A viral sensation blending hip-hop swagger with country swagger.`,
	`“First Rodeo” (2022): A fresh take on life lessons and tough love.`,
	`“Take Forever” (2023): The title track of his EP—one of his most heartfelt recordings.`,
	`“Jesus Saves” (2024): A song that blends spirituality with soul-stirring vocals.`,
	`“I Gotcha” (2025): A fan-favorite single full of Southern charm and lyrical warmth.`
]

function AlbumsCard ({ hdr, list }) {
    return (
        <div className='albums-card'>
            <div> {hdr} </div>

            <ul>
            {
                list?.map((item, i) => (
                    <li key={i}>
                        {item}
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export function Albums () {
    return (
        <div className='albums' id='albums'>
            <div>The Music: A Catalog of Heart, Humor, and Honesty</div>

            <div className='albums-cnt'>
                <AlbumsCard hdr='Albums' list={['Carolina Saturday Night (2017): A youthful introduction to Cooper’s songwriting. Raw, southern, and full of energy.']} />

                <AlbumsCard hdr='EPs' list={['Take Forever (2023): A mature, emotional body of work capturing love, growth, faith, and the journey of a young man finding his voice.']} />

                <AlbumsCard hdr='Notable Singles' list={Singles} />
            </div>

            <div>Each release showcases Cooper’s range—from laugh-out-loud fun to soul-searching ballads. He’s not afraid to be serious, and he’s never afraid to be silly. He just makes music people feel.</div>
        </div>
    )
}