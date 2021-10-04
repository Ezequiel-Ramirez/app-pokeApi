import React from 'react'

const CardPoke = ({ pokemon }) => {
    return (
        <div className="card col-lg-3 col-md-4 mt-2  m-auto ">

            <div className="card-body ">
                <h4 className="text-center text-dark">{pokemon.name}</h4>

                <figure className=" m-auto">
                    <img className="d-block m-auto" src={pokemon.sprites.front_default} alt={pokemon.name} />

                    <h3 className="text-center text-dark">{pokemon.name}</h3>
                    <p className="text-center text-dark">#0{pokemon.id}</p>

                </figure>

                {/*  <Link to={`/item/${hero.id}`}> <button className="btn btn-outline-dark m-2  " onClick={()=>setIdItem(hero.id)}>+ Info</button></Link> */}
                {/*   {
                user?.id &&
             
               
                <button onClick={() => tercerFuncion(hero)} className={`btn  ${isAdded(hero) ? "btn-danger" : "btn-success"}`} >{`${isAdded(hero) ? "Eliminar" : "Agregar"} `}</button>
               
                
            } */}

            </div>
        </div>
    )
}

export default CardPoke
