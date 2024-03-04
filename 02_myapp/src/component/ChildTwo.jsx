import React from 'react'

const ChildTwo = (props) => {
    return (
        <div>
            <p>This is child two.</p>
            <p>Data is : {props.parentName}</p>
            <p>
                Name : <input
                type="text"
                name="name"
                id="name"
                value={props.parentName}
                onChange={(event) => props.handleChange(event)}
                />
            </p>
        </div>
    )
}

export default ChildTwo
