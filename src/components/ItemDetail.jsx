import React, { useContext, useEffect } from 'react'
import PokeContext from '../context/PokeContext'

const ItemDetail = () => {
    const {  item, idItem, getItem } = useContext(PokeContext);

    useEffect(() => {
        getItem(idItem);
}, [getItem, idItem])

    return (
        <div className="container d-flex justify-content-center">
            <div className="w-100">
            <img className="d-block m-auto w-50"  src={item?.sprites?.other?.dream_world?.front_default} alt={item.name} />
            </div>
            <div className="w-100">

            <h1 className="float-start p-3">{item.name}</h1><h5 className="p-3 mt-3">#0{item.id}</h5>
            <div>

            <p>Height</p>
            <p>"{item.height}"</p>
            <p>Weight</p>
            <p>{item.weight} lbs</p>
            </div>
            <div>
                <p>Type</p>
               {/*  <h6>{item?.types?.type?.name}</h6> */}
                <p>Abilities</p>
               {/*  <p>{item?.ability[0]?.ability?.name}</p> */}
            </div>
            </div>
        </div>
    )
}

export default ItemDetail
