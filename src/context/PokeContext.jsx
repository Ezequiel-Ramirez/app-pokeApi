import React, { createContext, useMemo, useState } from "react";


const PokeContext = createContext();

const PokeProvider = ({ children }) => {
    const [pokeItem, setPokeItem] = useState([]);
    const [pokeSearch, setPokeSearch] = useState([])
    const [text, setText] = useState("");
    const [idItem, setIdItem] = useState("");
    const [item, setItem] = useState([]);
    const [error, setError] = useState("");
    const [stateSpinner, setStateSpinner] = useState(true)
    const [searchBar, setSearchBar] = useState(false)
    const [prev, setPrev] = useState(null)
    const [next, setNext] = useState(null)


    const validarCampos = () => {
        if (text === "") {
            setSearchBar(false);
            getPoke()
            return false
        } else {
            return true
        };
    }

    /* Busqueda por digito */
    const handleChange = e => {
        setText(e.target.value.toLowerCase());
        filtrar(e.target.value);

    }
    const filtrar = useMemo(() =>
        (terminoBusqueda) => {
            var resultadosBusqueda = pokeSearch.filter((elemento) => {
                if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                    || elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                    return elemento;
                }
            });
            setPokeItem(resultadosBusqueda);

        }, [pokeSearch])

    /* volver y resetear estados */
    const handleReturn = () => {
        setSearchBar(false);
        getPoke()

    }
    /* Busqueda por id o nombre en boton buscar */
    const getItem = async (id) => {
        if (validarCampos) {
            try {
                const url = "https://pokeapi.co/api/v2/pokemon/" + id;
                const res = await fetch(url);
                const newPoke = await res.json();
                const pokemon = {
                    name: newPoke.name,
                    id: newPoke.id,
                    img: newPoke.sprites?.front_default,
                    imgDetail: newPoke.sprites?.other["official-artwork"]?.front_default,
                    height: newPoke.height,
                    weight: newPoke.weight,
                    type: newPoke?.types[0]?.type?.name,
                    ability: newPoke?.abilities[1]?.ability?.name
                }
                setItem(pokemon);
                setSearchBar(true);
                setText("");

            } catch (error) {
                setError(error || "Ocurrió un error")
                console.log(error);

            }
        }

    }
    /* listado inicial de Pokemones */
    const getPoke = useMemo(() =>
        async () => {
            try {
                const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'";
                const res = await fetch(url);
                const json = await res.json();
                setPrev(json.previous);
                setNext(json.next);
                setPokeItem([]);
                /* setPokeSearch([]); */
                for (let i = 0; i < json.results.length; i++) {
                    try {
                        const respuesta = await fetch(json.results[i].url);
                        const pokemon = await respuesta.json()
                        const pokemonCard = {
                            name: pokemon?.name,
                            id: pokemon?.id,
                            img: pokemon?.sprites?.front_default,
                            imgDetail: pokemon?.sprites?.other["official-artwork"]?.front_default,
                            height: pokemon?.height,
                            weight: pokemon?.weight,
                            type: pokemon?.types[0]?.type?.name,
                            ability: pokemon?.abilities[1]?.ability?.name
                        }
                        setPokeItem(prevArray => [...prevArray, pokemonCard])
                        /* setPokeSearch(prevArray => [...prevArray, pokemonCard]) */
                        setStateSpinner(false)
                        setSearchBar(false)
                    } catch (err) {
                        setError(err || "Ocurrió un error")
                        console.log(err);
                    }
                }
            } catch (err) {
                setError(err || "Ocurrió un error")
                console.log(err);
                alert(err)
            }
        }
        , [])




    /* listado total de Pokemones */
    const getPokeTotal = useMemo(() =>
        async () => {

            try {
                const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118";
                const res = await fetch(url);
                const json = await res.json();
                setPokeSearch([]);
                for (let i = 0; i < json.results.length; i++) {
                    try {
                        const respuesta = await fetch(json.results[i].url);
                        const pokemon = await respuesta.json()
                        const pokemonCard = {
                            name: pokemon?.name,
                            id: pokemon?.id,
                            img: pokemon?.sprites?.front_default,
                            imgDetail: pokemon?.sprites?.other["official-artwork"]?.front_default,
                            height: pokemon?.height,
                            weight: pokemon?.weight,
                            type: pokemon?.types[0]?.type?.name,
                            ability: pokemon?.abilities[1]?.ability?.name
                        }
                        setPokeSearch(prevArray => [...prevArray, pokemonCard])
                    } catch (err) {
                        setError(err || "Ocurrió un error")
                        console.log(err);
                    }
                }
            } catch (err) {
                setError(err || "Ocurrió un error")
                console.log(err);
                alert(err)
            }
        }
        , [pokeSearch])


    /* paginacion */
    async function pagination(id) {

        if (id !== null) {

            try {
                const url = id;
                const res = await fetch(url);
                const json = await res.json();

                setPrev(json.previous);
                setNext(json.next);
                setPokeItem([]);
                for (let i = 0; i < json.results.length; i++) {
                    try {
                        const respuesta = await fetch(json.results[i].url);
                        const pokemon = await respuesta.json();
                        const pokemonCard = {
                            name: pokemon?.name,
                            id: pokemon?.id,
                            img: pokemon?.sprites?.front_default,
                            imgDetail: pokemon?.sprites?.other["official-artwork"]?.front_default,
                            height: pokemon?.height,
                            weight: pokemon?.weight,
                            type: pokemon?.types[0]?.type?.name,
                            ability: pokemon?.abilities[1]?.ability?.name
                        };
                        setPokeItem(prevArray => [...prevArray, pokemonCard]);
                        setStateSpinner(false);
                    } catch (err) {
                        setError(err || "Ocurrió un error");
                        console.log(err);
                    }
                }
            } catch (err) {
                setError(err || "Ocurrió un error");

            }

        }
    }


    const data = { pokeItem, setPokeItem, text, setText, idItem, setIdItem, getPoke, item, setItem, getItem, stateSpinner, setStateSpinner, searchBar, setSearchBar, error, prev, next, pagination, handleChange, handleReturn, getPokeTotal }
    return (
        <PokeContext.Provider value={data}>
            {children}
        </PokeContext.Provider>
    )
}

export { PokeProvider };
export default PokeContext;