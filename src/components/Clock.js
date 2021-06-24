import React, { useContext } from 'react';
import { Context } from "../container/Context";
import ControlButtons from "./ControlButtons";

function Clock() {
    const {state, minutes, seconds } = useContext(Context);

    return (
        <div className="clock">
            <div id="timer-label">{state === "session" ? "Session" : "Break"}</div>
            <div id="time-left">
                {/* If minutes or seconds are less than 10 add a leading 0 to it */}
                {`${minutes < 10 ? "0" + minutes : minutes}:${
                    seconds < 10 ? "0" + seconds : seconds
                }`}
            </div>
            <ControlButtons />
        </div>
    );
}

export default Clock;