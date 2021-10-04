import React, { createContext, useState } from "react";


const PokeContext = createContext();

const PokeProvider = ({ children }) => {
    const [pokeItem, setPokeItem] = useState([]);
    const [text, setText] = useState("");
    const [idItem, setIdItem] = useState("");
    const [item, setItem] = useState([]);
    const [error, setError] = useState("");
    const [stateSpinner, setStateSpinner] = useState(true)


    const validarCampos = () => {
        if (text === "" || text === Number) {
            return false
        } else {
            return true
        };
    }
    const getItem = async (id) => {
        const url = "https://pokeapi.co/api/v2/pokemon/" + id;
        const res = await fetch(url);
        const newPoke = await res.json();
        setItem(newPoke);
       
    }
    const getPoke = async () => {
        try {
            const url = "https://pokeapi.co/api/v2/pokemon/?limit=16&offset=0";
            const res = await fetch(url);
            const json = await res.json();
            for (let i = 0; i < json.results.length; i++) {
                try {
                    const respuesta = await fetch(json.results[i].url);
                    const pokemon = await respuesta.json()
                    setPokeItem(prevArray => [...prevArray, pokemon])
                    setStateSpinner(false)
                } catch (error) {
                    setError(error || "Ocurrió un error")
                }
            }
           
        } catch (error) {
            setError(error || "Ocurrió un error")
            console.log(error);
            
        }

        setText("");
        
    }

   

    const data = { pokeItem, setPokeItem, text, setText, idItem, setIdItem, getPoke,  item, getItem, stateSpinner, setStateSpinner }
    return (
        <PokeContext.Provider value={data}>
            {children}
        </PokeContext.Provider>
    )
}

export { PokeProvider };
export default PokeContext;