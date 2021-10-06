import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PokeContext from '../context/PokeContext'
import CardPoke from './CardPoke';
import SearchBar from './SearchBar';
import Spinner from './Spinner';

const ItemListContainer = () => {
    const { pokeItem, getPoke, stateSpinner, item, searchBar, setSearchBar, prev, next, pagination } = useContext(PokeContext);


    useEffect(() => {
        if (prev !== null) {
            pagination()
        } else {

            getPoke()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (searchBar) {
        return (
            <div className="container txtHeader">
                <div className="row">
                    <SearchBar />
                    <CardPoke pokemon={item} key={item.id} />
                    <Link to="/" className="text-decoration-none"><button className="btn btn-dark d-block m-auto" onClick={() => setSearchBar(false)}>Volver</button></Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container txtHeader" >
                <div className="row">
                    <SearchBar />
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-dark " id="prev" onClick={() => pagination(prev)}>Prev</button>
                        <button className="btn btn-outline-dark " id="next" onClick={() => pagination(next)}>Next</button>

                    </div>
                    {
                        stateSpinner ? <Spinner /> : pokeItem.map(pokemon => { return <CardPoke pokemon={pokemon} key={pokemon.id} /> })
                    }
                </div>

            </div>
        )
    }
}

export default ItemListContainer
