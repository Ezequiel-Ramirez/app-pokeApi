import React, { useContext, useEffect } from 'react'
import PokeContext from '../context/PokeContext'
import Spinner from './Spinner';
import "../css/itemdetail.css"
import { Link } from 'react-router-dom';

const ItemDetail = () => {
    const { item, idItem, getItem, stateSpinner, setSearchBar } = useContext(PokeContext);

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
                        <div className="container d-flex  justify-content-center p-5">
                            <button onClick={() => getItem((item.id) - 1)} className="btn btn-outline-dark h-50 m-auto fw-bold">#{item.id - 1}</button>
                            <div className="container-fluid  d-flex flex-column flex-md-row ">
                            <div className="w-100">
                                <img className="d-block m-auto w-100" src={item?.imgDetail} alt={item?.name} />
                            </div>
                            <div className="w-100">
                                <div className="d-flex justify-content-center">
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
                                        <p className="type">{item?.type}</p>
                                        <h6>Abilities</h6>
                                        <p>{item?.ability}</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <button onClick={() => getItem((item.id) + 1)} className="btn btn-outline-dark h-50 m-auto fw-bold">#{item.id + 1}</button>
                        </div>
                        <Link to="/" className="text-decoration-none"> <button className="btn btn-outline-dark d-block m-auto " onClick={() => setSearchBar(false)}>volver</button></Link>
                    </>
            }
        </>
    )
}

export default ItemDetail
