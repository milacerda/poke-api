import React from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";

const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
    
export default function PokemonPage(params: any) {
    const [loading, setLoading] = React.useState(false);
    const [pokemon, setPokemon] = React.useState(null);
    const [error, setError] = React.useState(null);
    const { pokemonId } = useParams();
    
    function toUserError(error: any) {
        console.log('Call API to log the raw error. ', error);
        return 'There was an error loading the pokemon.';
    }

    React.useEffect(() => {
        setLoading(true);
    
        fetch(pokemonUrl + pokemonId)
            .then((response) => {
                if (!response.ok) throw new Error(response.statusText);
                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                setError(null);
                setPokemon(data);
                setLoading(false);
            })
            .catch((error) => {
                const userError = toUserError(error);
                setError(userError);
                setLoading(false);
            });
    }, []);

    if (error) {
        return <div>{error}</div>;
    } else if (loading) {
        return <div>Loading...</div>;
    } else if (pokemon) {
        return <Card pokemon={pokemon} />;
    } else {
        return <div>Not Found!</div>;
    }
}
