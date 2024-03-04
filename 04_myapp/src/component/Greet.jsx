import React from 'react'
import './greet.css'


const Greet = (props) => {

    let className = props.primary ? 'primary' : 'secondary'
    console.log(props)
    return (

        <div>
            {/* <h4 className='primary' >Hi {props.name}, How are you?</h4> */}
            <p className={className} >Hi {props.name}, How are you?</p>
            {/* combine more than one class */}
            <p className={`${className} font-xl`}>Hi {props.name}, How are you?</p>
        </div>
    )
}

export default Greet
