import React, { useState } from 'react'
import ReactDOM from "react-dom/client";
import Home from './home';
//import { seconds, setSeconds } from "./SecondsGlobal";

const styleContainer = {
    display: "flex",
    marginTop: "0"
};
const styleButtom = {
    margin: "1",
    width: "5em"
};

function Menu() {
    const [seconds, setSeconds] = useState(0);

    const onclickStart = () => {
        if (!window.timer) {
            setInterval(() => {
                console.log(seconds);

                setSeconds((currentSeconds) => { return currentSeconds + 1 });
                //ReactDOM.createRoot(document.getElementById('app')).render(<Home seconds={seconds}/>);
            }, 1000);
        };
    };

    const onclickAlarm = () => {
        if (!window.timer) {
            let secondsAlarm = Number(document.getElementById("inputAlert").value);
            setInterval(() => {

                setSeconds((currentSeconds) => {
                    if (currentSeconds == secondsAlarm) { alert("ALARM!!") };
                    return currentSeconds + 1
                });
                //ReactDOM.createRoot(document.getElementById('app')).render(<Home seconds={seconds}/>);
            }, 1000);
        };
    };


    return (
        <>
            <div className='justify-content-between px-5' style={styleContainer}>
                <button onClick={onclickStart} type="button" className="btn btn-dark" style={styleButtom}>Start</button>
                <button onClick={onclickAlarm} type="button" className="btn btn-dark" style={styleButtom}>Alarm</button>
                <input type="text" id="inputAlert" class="form-control text-center" style={styleButtom} placeholder="5 Sec"></input>
            </div>
            <Home seconds={seconds} setSeconds={setSeconds} />
        </>
    )
}

export default Menu
