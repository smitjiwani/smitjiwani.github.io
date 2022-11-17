import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#db930e" : "white"
    }
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={() =>{
                props.holdDice()
                props.startTimer()
            }}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}