import React from 'react'
import Person from './Person'

const ListRendering_3 = () => {
    const persons = [
        {
            "id": 1,
            "name": "Ravi",
            "age": 30
        },
        {
            "id": 1,
            "name": "Anshul",
            "age": 22
        },
        {
            "id": 1,
            "name": "Anku",
            "age": 23
        },
        {
            "id": 1,
            "name": "Mohit",
            "age": 25
        },
        {
            "id": 1,
            "name": "Sahil",
            "age": 24
        }
    ]

    const personlist = persons.map(person => <Person key={person.name} person={person}/>)

    return (
        <div>
            {personlist}
        </div>
    )
}

export default ListRendering_3
