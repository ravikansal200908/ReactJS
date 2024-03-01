import React from 'react'

const ChildOne = (props) => {
    return (
        <div>
            <p>This is child.</p>
            <p>Data is : {props.parentName}</p>
        </div>
    )
}

export default ChildOne
