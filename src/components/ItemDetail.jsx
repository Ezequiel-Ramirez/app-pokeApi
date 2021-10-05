import React, { useContext, useEffect } from 'react'
import PokeContext from '../context/PokeContext'
import Spinner from './Spinner';
import "../css/itemdetail.css"
import { Link } from 'react-router-dom';

const ItemDetail = () => {
    const { item, idItem, getItem, stateSpinner, setPokeItem } = useContext(PokeContext);

    useEffect(() => {
        getItem(idItem);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                stateSpinner
                    ? <div className="container d-flex justify-content-center">
                        <div className="w-100">
                            <Spinner />
                        </div>
                    </div>
                    : <>
                        <div className="container d-flex justify-content-center">
                            <button onClick={() => getItem((item.id) - 1)} className="btn btn-outline-dark h-50 m-auto fw-bold">#{item.id - 1}</button>
                            <div className="w-100">
                                <img className="d-block m-auto w-50" src={item?.sprites?.other?.dream_world?.front_default} alt={item?.name} />
                            </div>
                            <div className="w-100">
                                <div className="d-flex">
                                    <h1 className="p-3">{item?.name}</h1><h5 className="p-3 mt-3">#0{item?.id}</h5>
                                </div>
                                <div className="d-flex justify-content-around flex-direccion-start">

                                    <div>
                                        <h6 >Height</h6>
                                        <p>"{item?.height}"</p>
                                        <h6>Weight</h6>
                                        <p>{item?.weight} lbs</p>
                                    </div>
                                    <div>
                                        <h6>Type</h6>
                                        <p className="type">Fire</p>
                                        {/*  <p>{item?.types[0]?.type?.name}</p> */}
                                        <h6>Abilities</h6>
                                        <p>sturdy</p>
                                        {/* <p>{item?.abilities[1]?.ability?.name}</p> */}
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => getItem((item.id) + 1)} className="btn btn-outline-dark h-50 m-auto fw-bold">#{item.id + 1}</button>
                        </div>
                        <Link to="/" className="text-decoration-none"> <button className="d-block m-auto " onClick={() => setPokeItem([])}>volver</button></Link>
                    </>
            }
        </>
    )
}

export default ItemDetail
