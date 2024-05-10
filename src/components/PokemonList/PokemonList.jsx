import { useCallback, useEffect, useRef, useState } from 'react';
import classes from './PokemonList.module.scss';
import PokemonItem from './PokemonItem';
import { Outlet } from 'react-router-dom';


const PokemonList = () => {
	const [pokemonData, setPokemonData] = useState([]);
	const [pokemonNameData, setPokemonNameData] = useState([]);
	const pages = useRef(1);

	const fetchPokemonData = useCallback(async () => {
		let newPokemonData = [];
		const newRequest = [];

		for(let i = (pages.current - 1) * 20 + 1; i <= pages.current * 20; i++) {
			newRequest.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`).then(response => response.json()));
		}

		try {
			const data = await Promise.all(newRequest);
			newPokemonData = data;
		} catch (err) {
			console.log('오류발생');
		}
		setPokemonData([...pokemonData, ...newPokemonData])
	}, [pokemonData])

	const fetchPokemonNameData = useCallback(async () => {
		let newPokemonNameData = [];
		const newRequest = [];

		for(let i = (pages.current - 1) * 20 + 1; i <= pages.current * 20; i++) {
			newRequest.push(fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`).then(response => response.json()));
		}

		try {
			const data = await Promise.all(newRequest);
			newPokemonNameData = data;
		} catch (err) {
			console.log('에러발생');
		}

		setPokemonNameData([...pokemonNameData, ...newPokemonNameData]);
	}, [pokemonNameData])

	useEffect(() => {
		fetchPokemonData();
		fetchPokemonNameData();
	}, []);

	const showMoreHandler = () => {
		pages.current++;
		fetchPokemonData();
		fetchPokemonNameData();
	}

	return (
		<>
			<Outlet></Outlet>
			<div className={classes.pokemon_list_wrap}>
				<div className={classes.pokemon_list_container}>
					{pokemonData.map((item, idx) => (
						<PokemonItem key={item.id} pokemonData={item} pokemonNameData={pokemonNameData[idx]}></PokemonItem>
					))}
				</div>
				<div className={classes.pokemon_show_more_btn_container}>
					<button type='button' onClick={showMoreHandler}>더보기</button>
				</div>
			</div>
		</>
	)
};

export default PokemonList;