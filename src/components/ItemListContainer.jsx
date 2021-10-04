import React, { useContext, useEffect } from 'react'
import PokeContext from '../context/PokeContext'
import CardPoke from './CardPoke';

const ItemListContainer = () => {
    const { pokeItem, stateSearch, getPoke, getItem, item } = useContext(PokeContext);

    useEffect(() => {
        
       getPoke();
     
    }, [getPoke])
   
    return (
        <div className="container txtHeader" >
        <div className="row">
        {
            stateSearch?<>
           {/*  <SearchBar /> */}
           { pokeItem.map(pokemon => { return <CardPoke pokemon={pokemon} key={pokemon.id} /> })}</>
            :
            <>
            <h1 className="text-center p-5 " id="btnSearch">Busca tu Super Héroe</h1>
           {/*  <SearchBar  /> */}
            </>
        }

        </div>

    </div>
    )
}

export default ItemListContainer
