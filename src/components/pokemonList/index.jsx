import { useEffect, useState } from "react";
import axios from "axios";

export const PokemonList = () => {
  const [apiData, setApiData] = useState([]);
  const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon?limit=151",
  });

  useEffect(() => {
    const fetchApi = async () => {
      const response = await api.get("/");
      const responseData = response.data.results;

      setApiData(responseData);
    };

    fetchApi();
  }, []);

  return (
    <>
      <h1>Pokemon List</h1>

      <h2>{apiData.length} Pokémons: </h2>

      <ul style={{ listStyleType: "none" }}>
        {apiData.map((pokemon, index) => (
          <li key={index}>
            {(index + 1).toString().length < apiData.length.toString().length &&
              "0".repeat(
                apiData.length.toString().length - (index + 1).toString().length
              )}
            {index + 1}
            {": "}
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </li>
        ))}
      </ul>
    </>
  );
};
