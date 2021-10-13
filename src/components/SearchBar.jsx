import React, { useContext } from 'react'
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import PokeContext from '../context/PokeContext'
import "../css/searchbar.css";

const SearchBar = () => {
    const { text, getItem, handleChange } = useContext(PokeContext);

    return (
        <div className="container ">
            <InputGroup className="mt-5 w-50 m-auto barra">
                <FormControl
                
                    placeholder="Buscar Pokemon"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    type="text"
                    value={text}
                    onChange={handleChange}
                    className="isEmpty(str [, options])"
                    data-errormessage-custom-error="Ingrese un id o nombre válido"
                    data-errormessage-value-missing="Ingrese un id o nombre válido"
                />
                <Button className="btnSearch" onClick={() => getItem(text)} variant="outline-secondary" id="button-addon2">
                    Buscar
                </Button>
            </InputGroup>

        </div>
    )
}

export default SearchBar
