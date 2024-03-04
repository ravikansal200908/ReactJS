import React from 'react'
import './listRendering_1.css'

const ListRendering_1 = () => {

    const names = ["Mango", "Banana", "Apple"]

    return (
        <div>
            {/* <h4>{names[0]}</h4>
            <h4>{names[1]}</h4>
            <h4>{names[2]}</h4> */}

            {
                names.map(name => <h3 className='primary'>{name}</h3>)
            }

        </div>
    )
}

export default ListRendering_1
