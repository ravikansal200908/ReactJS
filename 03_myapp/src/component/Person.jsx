import React from 'react'

// const Person = (props) => {
const Person = ({person}) => {
    return (
        <div>
            <h4>
                {/* My name is : {props.person.name} and age is {props.person.age}. */}
                My name is : {person.name} and age is {person.age}.
            </h4>
        </div>
    )
}

export default Person
