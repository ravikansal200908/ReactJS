import React, { useState } from 'react'
import ChildTwo from './ChildTwo'

const ParentTwo = () => {

    const [parentName, setParentName] = useState('')

    const handleChange = (event) => {
        console.log("===>>", event.target.value)
        setParentName(event.target.value)
    }

    return (
        <>
            <div>
                <p>This is parent two.</p>
                <p>
                    Name : <input type="text" name="name" id="name" onChange={handleChange} value={parentName} />
                </p>
            </div>
            <div>
                {/* via callback child change parent data */}
                <ChildTwo parentName={parentName} handleChange={handleChange} />
            </div>
        </>
    )
}

export default ParentTwo
