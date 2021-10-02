import React, { useContext, useEffect } from 'react'
import PokeContext from '../context/PokeContext'

const ItemListContainer = () => {
    const { pokeItem, stateSearch, getPoke } = useContext(PokeContext);

    useEffect(() => {
       getPoke();
    }, [])
    return (
        <div>
            <h1>holaa</h1>
        </div>
    )
}

export default ItemListContainer
