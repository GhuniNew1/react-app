import React from "react";
import SingleCards from "./SingleCard";

import './Home.css'

const HomePage = ({wifiSpeed, Clock}) => {
    const data = [
        //{iconName:'car-sport-outline',txtMain:'Tesla',txtInfo:` MB/s`,key:'1'},
        {iconName:'headset-outline',txtMain:'Headset',txtInfo:'80%',key:'2'},
        {iconName:'thermometer-outline',txtMain:'Temperature',txtInfo:'17°C',key:'3'},
        {iconName:'wifi-outline',txtMain:'Net Speed',txtInfo:`${wifiSpeed} MB/s`,key:'4'},
    ]

    return(
        <div className='home-container'>
            <p>App</p>
            <div className='card-container'>
                {data.map(item => <SingleCards {...item}/>)}
            </div>

        </div>
    )
}


export default HomePage