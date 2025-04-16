import './style.css'
import './style.mobile.css'
import { Banner } from './Components/Banner';
import { FunFacts } from './Components/FunFacts';
import { HomeRoots } from './Components/HomeRoots';
import { LeapOfFaith } from './Components/LeapOfFaith';
import { GoingViral } from './Components/GoingViral';
import { Albums } from './Components/Albums';
import { LiveShows } from './Components/LiveShows';
import { BeyoundTheMic } from './Components/BeyoundTheMic';
import { Voice } from './Components/Voice';
import { FanConnection } from './Components/FanConnection';
import { RoadAhead } from './Components/RoadAhead';


function Page () {
    return (
        <div className='homepage'>
            <Banner />
            <FunFacts />
            <HomeRoots />
            <LeapOfFaith />
            <GoingViral />
            <Albums />
            <LiveShows />
            <BeyoundTheMic />
            <Voice />
            <FanConnection />
            <RoadAhead />
        </div>
    )
}

export default Page;