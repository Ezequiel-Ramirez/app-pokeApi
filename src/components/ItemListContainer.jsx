import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PokeContext from '../context/PokeContext'
import CardPoke from './CardPoke';
import SearchBar from './SearchBar';
import Spinner from './Spinner';

const ItemListContainer = () => {
    const { pokeItem, getPoke, stateSpinner, text, getItem, idItem, setIdItem, item, searchBar, setItem, setText, setSearchBar } = useContext(PokeContext);


    useEffect(() => {
        if (item !== "") {
            getItem()
        } else {
            
        }
            getPoke()
        

    }, [])

    if (searchBar ) {
        return (
            <div className="container txtHeader">
                <div className="row">
            <SearchBar />
            <CardPoke pokemon={item} key={item.id}/>
            <Link to="/" className="text-decoration-none"><button className="btn btn-dark d-block m-auto" onClick={()=>setSearchBar(false)}>Reset</button></Link>
                </div>
            </div>
        )
    } else {
        
        return (
            <div className="container txtHeader" >
                <div className="row">
                    <SearchBar />
                    {
                        stateSpinner ? <Spinner /> : pokeItem.map(pokemon => { return <CardPoke pokemon={pokemon} key={pokemon.id} /> })
                    }
                </div>
            </div>
        )
    }
}

export default ItemListContainer
