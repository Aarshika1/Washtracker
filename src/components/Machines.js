import { GiWashingMachine } from "react-icons/gi";
import React from 'react'
import Popupform from './Popupform';
import { useState } from 'react'


function Machines(props) {
    const [buttonPopup, setbuttonPopup] = useState(false)
    return (
        <div className = "machines">
                {props.trigger ? <GiWashingMachine size={200} className="gi_icon" color={"red"} /> : <GiWashingMachine size={200} className="gi_icon" color={"black"} />}
                <div>
                    <button className = "button" onClick={() => setbuttonPopup(true)}>View</button>
                    <Popupform trigger = {buttonPopup} setTrigger = {setbuttonPopup}>
                        Status
                        <p> Are you using the machine ?</p>
                        <button onClick={() => props.setTrigger(!props.trigger)}>Check In/Out</button>
                    </Popupform>
                </div>
                { props.children }
        </div>
        
    );

}

export default Machines
