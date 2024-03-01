import React, { useState } from 'react'

const IncrementOther = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)

        // setCount(count => count + 1)
        // setCount(count => count + 1)
        // setCount(count => count + 1)
        // setCount(count => count + 1)

        console.log("click done")
    }

    return (
        <div>
            <p>Count is : {count}</p>
            <button onClick={handleClick}>Inc</button>
        </div>
    )
}

export default IncrementOther
