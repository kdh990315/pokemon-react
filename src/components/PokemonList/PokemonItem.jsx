import classes from './PokemonItem.module.scss';
import { Link } from 'react-router-dom';
import PokemonTypeContainer from './PokemonTypeContainer';

const PokemonItem = (props) => {
	
	return (
		<>
			<Link to={`/${props.pokemonData.id}`} className={ classes.pokemon_item_wrap }>
				<div className={ classes.pokemon_num_container }>
					<span>No.{ props.pokemonData.id }</span>
				</div>
				<div className={ classes.pokemon_item_container }>
					<div className={ classes.pokemon_img_container }>
						<img src={ props.pokemonData.sprites.versions["generation-v"]["black-white"].animated.front_default } alt="포켓몬 이미지" />
					</div>

					<div className={ classes.pokemon_name_container }>
						<span>{ props.pokemonNameData?.names[2]?.name }</span>
					</div>

					<div className={ classes.pokemon_type_container }>
						<PokemonTypeContainer pokemonType={props.pokemonData.types}></PokemonTypeContainer>
					</div>
				</div>
			</Link>
		</>
	)
}

export default PokemonItem;