import React from 'react'

const ListRendering_2 = () => {
    const names = ["Mango", "Banana", "Apple"]

    // const namelist = names.map(name => <h4>{name}</h4>)
    const namelist = names.map((name,index) => <h4 key={index} >{index} - {name}</h4>)

    return (
        <div>
            {namelist}
        </div>
    )
}


export default ListRendering_2
