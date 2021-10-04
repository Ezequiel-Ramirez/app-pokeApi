import React, { useContext, useEffect } from 'react'
import PokeContext from '../context/PokeContext'
import CardPoke from './CardPoke';
import Spinner from './Spinner';

const ItemListContainer = () => {
    const { pokeItem, stateSearch,  getPoke, stateSpinner } = useContext(PokeContext);
    

    useEffect(() => {
        
      getPoke()
     
    }, [])
   
    return (
        <div className="container txtHeader" >
        <div className="row">
       
           
           {/*  <SearchBar /> */}
           {
               stateSpinner?<Spinner/>: pokeItem.map(pokemon => { return <CardPoke pokemon={pokemon} key={pokemon.id} /> })
           }
          
          
          
           
        

        </div>

    </div>
    )
}

export default ItemListContainer
