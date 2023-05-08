import React from 'react';
import "./styles.module.css"
import Pic from "./onboard_pic.png"
import lock from "./lock.png"

const Onboard = () => {
    return (
        <div className='desktop__home'>
            <img src={Pic} alt="home" />
            <h1>Pocket Notes</h1>
            <p>Send and receive messages without keeping your phone online.<br/>Use Pocket Notes on up to 4 linked Devices and 1 mobile phone.</p>
            <div className="desktop__home__bottom">
                <img src={lock} alt="lock" />
                <span>end-to-end encrypted</span>
            </div>
        </div>
    );
}

export default Onboard;
