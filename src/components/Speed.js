import React,{useState} from 'react'

import { ReactInternetSpeedMeter } from 'react-internet-meter'
import 'react-internet-meter/dist/index.css'
import HomePage from './Home'

import test from '../img/test.jpg';

export default function Speed() {
  const [wifiSpeed,setwifiSpeed] = useState("Checking ... ")
  return (
    <>
      <div>
        <ReactInternetSpeedMeter  
            txtSubHeading="Internet is too slow"
            outputType="alert"
            customClassName={null}
            txtMainHeading="Opps..." 
            imageUrl={test}
            downloadSize="117438" //bytes
            pingInterval="4000" // sec
            thresholdUnit='megabyte' // "byte" , "kilobyte", "megabyte" 
            threshold={100}
            callbackFunctionOnNetworkDown={(speed)=>console.log(`Internet speed is down ${speed}`)}
            callbackFunctionOnError={(errMsg)=>console.log(errMsg)}
            callbackFunctionOnNetworkTest={(speed)=>setwifiSpeed(speed)}
          />
        <HomePage 
          wifiSpeed={wifiSpeed}
        />
    </div>
    </>
  );
}
