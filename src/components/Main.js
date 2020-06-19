import React from "react";
import './css/Main.css';

function Main() {
    return(
        <div className="Main">
            <div id="boxContainer" className="boxContainer">
                <div className="box1">
                     <h1><p id="outPut">0:00:00:00</p></h1>
                </div>
            </div>
            <br/>
                <button id="startPause" className="btn btn-danger" onClick={startTheTime}><b id="start">Start</b></button>
               
        </div>
    );
}
var time = 0;
var running = 0;

function startTheTime() {

    if(running == 0){
        running = 1;
        increment();
        document.getElementById("start").innerHTML = "Pause";
        document.getElementById("startPause").style.backgroundColor = "red";
        document.getElementById("startPause").style.borderColor = "red";
    }else{
        running = 0;
        document.getElementById("start").innerHTML = "Rasume";
        document.getElementById("startPause").style.backgroundColor = "green";
        document.getElementById("startPause").style.borderColor = "green";
    }
}

function increment() {
    if(running == 1){
        setTimeout(function(){
            time++;
            var mins = Math.floor(time/10/60);
            var secs = Math.floor(time/10%60);
            var hours = Math.floor(time/10/60/60);
            var tenth = time%10;

            if(mins < 10){
                mins = "0" + mins;
            }
            if(secs < 10){
                secs = "0" + secs;
            }
            document.getElementById("outPut").innerHTML = hours + ":" + mins + ":" + secs + ":" + tenth + "0";
            increment();
        },100)
    }
}

export default Main;