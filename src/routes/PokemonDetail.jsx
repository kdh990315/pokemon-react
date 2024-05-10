import { Link, useLoaderData, useParams } from "react-router-dom";
import classes from './PokemonDetail.module.scss';
import Modal from "../ui/Modal";
import PokemonTypeContainer from "../components/PokemonList/PokemonTypeContainer";
import PokemonEvolution from "../components/PokemonDetail/PokemonEvolution";

const PokemonDetail = () => {
	const newData = useLoaderData();

	const params = useParams();
	const pokemon_id = params.pokemonId;

	return (
		<Modal>
			<div className={ classes.pokemonDetail_wrap }>
				<div className={ classes.pokemonDetail_container }>
					<div className={ classes.pokemonDetail_header }>
						<span>No.{ pokemon_id }</span>
						<strong>{ newData.name }</strong>
						<Link to='..' className={ classes.close_btn }>닫기</Link>
					</div>

					<div className={ classes.pokemonDetail_info_container }>
						<div className={ classes.pokemonDetail_img_container }>
							<img
								src={ newData.sprites.versions["generation-v"]["black-white"].animated.front_default }
								alt={ newData.name }
							/>
						</div>

						{/* 포켓몬 설명 */ }
						<div className={classes.pokemon_genera_container}>
							<p className={classes.genera}>{ newData.genera }</p>
							<p className={classes.flavor_text}>{newData.flavor_text}</p>
						</div>
						{/* 포켓몬 타입 */ }
						<div className={classes.pokemon_tpye_container}>
							<PokemonTypeContainer pokemonType={ newData.types }></PokemonTypeContainer>
						</div>
						{/* 신장/체중 */ }
						<div className={classes.pokemon_basicinfo_wrap}>
							<div className={classes.pokemon_basicinfo_container}>
								<div className={classes.pokemon_basicinfo_title}>
									<span>키</span>
								</div>
								<div>
									<span>{ (newData.height / 10).toFixed(1) }m</span>
								</div>
							</div>

							<div className={classes.pokemon_basicinfo_container}>
								<div className={classes.pokemon_basicinfo_title}>
									<span>무게</span>
								</div>
								<div>
									<span>{ (newData.weight / 10).toFixed(1) }kg</span>
								</div>
							</div>
						</div>

						{/* 상성정보 */ }
						<div></div>

						{/* 진화정보 */ }
						<div className={classes.pokemon_evolution_wrap}>
							<p>진화정보</p>
							<PokemonEvolution url={newData.evolutionUrl} id={pokemon_id}></PokemonEvolution>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default PokemonDetail;

export const loader = async (props) => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.params.pokemonId}/`);
	const responseData = await response.json();
	const resopnseKo = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${props.params.pokemonId}/`);
	const resopnseKoData = await resopnseKo.json();

	const returnText = (text) => {
		const textData = text.find(item => item.language.name === 'ko');
		return textData.flavor_text;
	}

	const newData = {
		...responseData,
		name: resopnseKoData.names[2].name,
		genera: resopnseKoData.genera[1].genus,
		flavor_text: returnText(resopnseKoData.flavor_text_entries),
		evolutionUrl: resopnseKoData.evolution_chain.url,
	}
	return newData;
}