import React, { useState } from 'react'

const Increment = () => {
    const [count, setCount] = useState(0)

    const IncClick = () => {
        console.log("IncClick")
        setCount(count + 1)
    }

    const DecClick = () => {
        console.log("DecClick")
        if (count > 0) {
            setCount(count - 1)
        }
        else {
            console.log("-ve not allowed")
        }
    }

    return (
        <div>
            <p>Count is : {count}</p>
            <button onClick={IncClick}>Inc</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p></p>
            <button onClick={DecClick}>Dec</button>
        </div>
    )
}

export default Increment
