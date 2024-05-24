import React from "react";
import PokemonList from "../components/PokemonList/PokemonList.jsx";
import Search from "../components/Search/Search.jsx";

const PokemonMain = () => {

  return (
    <>
      <Search></Search>
      <PokemonList></PokemonList>
    </>
  );
}

export default PokemonMain;
