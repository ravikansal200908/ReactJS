import React, { useState } from 'react'
import ChildOne from './ChildOne'

const ParentOne = () => {

    const [parentName, setParentName] = useState('')

    const handleChange = (event) => {
        console.log("===>>", event.target.value)
        setParentName(event.target.value)
    }

    return (
        <>
            <div>
                <p>This is parent.</p>
                <p>
                    Name : <input type="text" name="name" id="name" onChange={handleChange} value={parentName} />
                </p>
            </div>
            <div>
                <ChildOne parentName={parentName} />
            </div>
        </>
    )
}

export default ParentOne
