import '../style.css'
import '../style.mobile.css'

function FunFactsCard ({ hdr, cnt }) {
    return (
        <div className='fun-facts-card'>
            <div>
                {hdr}
            </div>

            <div>{cnt}</div>
        </div>
    )
}

export function FunFacts () {
    return (
        <div className='fun-facts' id='fun-facts'>
            <FunFactsCard hdr='Multi-Instrumentalist' cnt='Guitar, drums, bass—you name it. Cooper can play it, and he often does live.' />
            <FunFactsCard hdr='Social Media King' cnt='Known for turning trending audios into country gold.' />
            <FunFactsCard hdr='Foodie Life' cnt='Loves southern comfort food and never turns down a good hot wing challenge.' />
            <FunFactsCard hdr='Movie Buff' cnt='Huge fan of comedy films and action flicks—loves quoting classics.' />
        </div>
    )
}