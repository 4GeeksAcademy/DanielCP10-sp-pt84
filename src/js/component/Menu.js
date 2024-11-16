import React, { useState } from 'react'
import ReactDOM from "react-dom/client";
import Home from './home';
//import { seconds, setSeconds } from "./SecondsGlobal";



function Menu() {
    const styleContainer = {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "0",
        paddingLeft: "4em",
        paddingRight: "4em"
    };
    const styleButtom = {
        margin: "1",
        width: "5em"
    };

    const [seconds, setSeconds] = useState(0);
    const [changeButtom, setChangeButtom] = useState(true);

    const onclickStart = () => {
        setChangeButtom(false);
        if (!window.timer) {
            window.timer = setInterval(() => {
                console.log(seconds);

                setSeconds((currentSeconds) => { return currentSeconds + 1 });
                //ReactDOM.createRoot(document.getElementById('app')).render(<Home seconds={seconds}/>);
            }, 1000);
        };
    };

    const onclickAlarm = () => {
        setChangeButtom(false);
        if (!window.timer) {
            let secondsAlarm = (document.getElementById("inputAlert").value == 0 ? 5 : Number(document.getElementById("inputAlert").value));

            window.timer = setInterval(() => {

                setSeconds((currentSeconds) => {
                    if (currentSeconds == secondsAlarm) { alert("ALARM!!") };
                    return currentSeconds + 1
                });
                //ReactDOM.createRoot(document.getElementById('app')).render(<Home seconds={seconds}/>);
            }, 1000);
        };
    };

    const onclickReload = () => {
        location.reload();        
    };

    return (
        <>
            <div className={`${changeButtom ? '' : 'd-none'}`} style={styleContainer}>
                <button onClick={onclickStart} type="button" className="btn btn-dark" style={styleButtom}>Start</button>
                <button onClick={onclickAlarm} type="button" className="btn btn-dark" style={styleButtom}>Alarm</button>
                <input type="text" id="inputAlert" class="form-control text-center" style={styleButtom} placeholder="5 Sec"></input>
            </div>
            <div className={`${changeButtom ? 'd-none' : ''}`} style={{display: "flex",
        justifyContent: "center"}}>
                <button onClick={onclickReload} type="button" className="btn btn-dark" style={styleButtom}>Reload</button>
            </div>
            <Home seconds={seconds} setSeconds={setSeconds} />
        </>
    )
}

export default Menu
