import React from "react"
import Die from "./Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App() {
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [rollCount, setRollCount] = React.useState(0)
    const [start, setStart] = React.useState(false)
    const [time, setTime] = React.useState(0)

    const [timeKeep, setTimeKeep] = React.useState(
        () => JSON.parse(localStorage.getItem("timeKeep")) || []
    )
    const [countMemory, setCountMemory] = React.useState(
        () => JSON.parse(localStorage.getItem("countArr")) || []
    )

    // This function verifies that all are the same and all dice are held,
    // if true set tenzies to true and updates localStorage
    React.useEffect(() => {
        const allHeld = dice.every((die) => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every((die) => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            setTimeKeep((prevTimeKeep) => [time, ...prevTimeKeep])
            setCountMemory((prevCountMemory) => [rollCount, ...prevCountMemory])
            localStorage.setItem("countArr", JSON.stringify(countMemory))
            localStorage.setItem("timeKeep", JSON.stringify(timeKeep))
        }
    }, [dice, tenzies])

    // This function verifies if the timer should start and stop
    React.useEffect(() => {
        let interval
        if (start === true && tenzies === false) {
            const startTime = Date.now()
            interval = setInterval(() => {
                setTime(((Date.now() - startTime) / 1000).toFixed(2))
            }, 100)
        } else {
            clearInterval(interval)
            setTime(0)
        }
        return () => {
            clearInterval(interval)
        }
    }, [start, tenzies])

    // This function starts the timer
    function startTimer() {
        tenzies && time ? setStart(false) : setStart(true)
    }

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
        }
    }

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }

    function rollDice() {
        if (!tenzies) {
            setRollCount((prevCount) => prevCount + 1)
            setDice((oldDice) =>
                oldDice.map((die) => {
                    return die.isHeld ? die : generateNewDie()
                })
            )
        } else {
            setTenzies(false)
            setDice(allNewDice())
            setRollCount(0)
        }
    }

    function holdDice(id) {
        setDice((oldDice) =>
            oldDice.map((die) => {
                return die.id === id ? { ...die, isHeld: !die.isHeld } : die
            })
        )
    }

    const diceElements = dice.map((die) => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
            startTimer={startTimer}
            time={time}
        />
    ))
    return (
        <main>
            {tenzies && <Confetti />}
            <div className="game-stats">
                <p className="roll-count">
                    {countMemory.length ? `Best Rolls ${Math.min(...countMemory)}` : "Best Rolls"}
                </p>
                <p className="time-track">
                    {timeKeep.length ? `Best Time ${Math.min(...timeKeep)}` : "Best Time"}
                </p>
            </div>
            <h1 className="title">10zies</h1>
            <p className="instructions">
                Roll until all dice are the same. Click each die
                <br />
                to freeze it at its current value between rolls.
            </p>
            <div className="dice-container">{diceElements}</div>
            <div className="game-stats-current">
                <p className="roll-count">{`Rolls  ${rollCount}`}</p>
                <p className="time-track">{time ? `Timer ${Math.floor(time % 60)}` : `Timer 0`}</p>
            </div>
            <button className="roll-dice" onClick={rollDice}>
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    )
}