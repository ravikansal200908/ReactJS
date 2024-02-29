import React from 'react'

// const Greet = (props) => {
const Greet = props => {
    console.log('props : ', props)
    // : Cannot assign to read only property 'name' of object
    // props.name = "Amit"
    return (
        <div>
            <h4>Hello {props.name} a.k.a {props.heroname}</h4>
            {props.children}
        </div>
    )
}

export default Greet
