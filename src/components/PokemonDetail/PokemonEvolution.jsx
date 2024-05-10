import React, { useEffect, useState } from "react";
import classes from './PokemonEvolution.module.scss';
import { Link } from "react-router-dom";

const PokemonEvolution = (props) => {
	const [pokemonData, setPokemonData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchPokemonEvolutionData = async () => {
		setIsLoading(true);

		const response = await fetch(props.url);
		const resopnseData = await response.json();

		if (
			resopnseData.chain.evolves_to[0]?.species.name &&
			resopnseData.chain.evolves_to[0].evolves_to[0]?.species.name
		) {
			const pokemonName = {
				firstName: resopnseData.chain.species.name,
				secondName: resopnseData.chain.evolves_to[0].species.name,
				thirdName: resopnseData.chain.evolves_to[0].evolves_to[0].species.name,
			}

			const { pokemonImg, KoName, pokemonId } = await loadData(pokemonName);

			setPokemonData(
				pokemonImg.map((img, idx) => ({
					name: KoName[idx],
					url: img,
					id: pokemonId[idx],
				}))
			)
		} else if (
			resopnseData.chain.evolves_to[0]?.species.name &&
			resopnseData.chain.evolves_to[0].evolves_to.length === 0
		) {
			const pokemonName = {
				firstName: resopnseData.chain.species.name,
				secondName: resopnseData.chain.evolves_to[0].species.name,
			}

			const { pokemonImg, KoName, pokemonId } = await loadData(pokemonName);

			setPokemonData(
				pokemonImg.map((img, idx) => ({
					name: KoName[idx],
					url: img,
					id: pokemonId[idx],
				}))
			)
		}

		setIsLoading(false);
	};

	const fetchPokemonEvolutionImg = async (names) => {
		const imgUrl = [];
		try {
			for (const key in names) {
				const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${names[key]}/`);
				const responseData = await response.json();

				imgUrl.push(responseData.sprites.front_default);
			}

			return imgUrl;
		} catch (err) {
			console.log(err);
		}
	}

	const fetchPokemonKoName = async (names) => {
		const KoName = [];
		const pokemonId = [];
		for (const key in names) {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${names[key]}/`);
			const responseData = await response.json();
			pokemonId.push(responseData.id)
			KoName.push(responseData.names[2].name);
		}
		return { KoName, pokemonId };
	}

	const loadData = async (pokemonName) => {
		const pokemonImg = await fetchPokemonEvolutionImg(pokemonName);
		const { KoName, pokemonId } = await fetchPokemonKoName(pokemonName);

		return { pokemonImg, KoName, pokemonId };
	}

	useEffect(() => {
		fetchPokemonEvolutionData();
	}, [])

	return (
		<div className={ classes.pokemon_evolution_container }>
			{ isLoading === true && (
				<p>로딩중...</p>
			) }

			{ pokemonData.length > 0 && isLoading === false &&
				pokemonData.map((data, idx) => (
					<React.Fragment key={ idx }>
						<Link to={ `/${data.id}` } className={ classes.pokemon_evolution_item }>
							<img src={ data.url } alt={ data.name } />
							<span>{ data.name }</span>
						</Link>
						{ idx !== pokemonData.length - 1 && <span>&gt;</span> }
					</React.Fragment>
				))
			}

			{ pokemonData.length === 0 && isLoading === false && (
				<p>진화 정보가 없습니다.</p>
			)}

		</div>
	)
}

export default PokemonEvolution;