import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import PokeContext from '../context/PokeContext'

const CardPoke = ({ pokemon }) => {
    const { setIdItem } = useContext(PokeContext);
    return (
        <div className="card col-lg-3 col-md-4 mt-2  m-auto " onClick={()=>setIdItem(pokemon.id)}>
            <div className="card-body ">
        <Link to="/itemDetail" className="text-decoration-none" >
               
                <figure className=" m-auto">
                    <img className="d-block m-auto" src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <h3 className="text-center text-dark">{pokemon.name}</h3>
                    <p className="text-center text-dark">#0{pokemon.id}</p>
                </figure> 
        </Link>
            </div>
        </div>
    )
}

export default CardPoke
