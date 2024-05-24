import classes from './PokemonItem.module.scss';
import { Link } from 'react-router-dom';
import PokemonTypeContainer from './PokemonTypeContainer';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import classNames from 'classnames';

const PokemonItem = (props) => {
	const {darkMode} = useContext(ThemeContext);
	
	return (
		<>
			<Link to={`/${props.pokemonData.id}`} className={classNames(classes.pokemon_item_wrap, {[classes.dark_mode]: darkMode})}>
				<div className={classNames(classes.pokemon_num_container, {[classes.dark_mode]: darkMode})}>
					<span>No.{ props.pokemonData.id }</span>
				</div>
				<div className={ classes.pokemon_item_container }>
					<div className={ classes.pokemon_img_container }>
						<img src={ props.pokemonData.sprites.versions["generation-v"]["black-white"].animated.front_default } alt="포켓몬 이미지" />
					</div>
					
					<div className={classNames(classes.pokemon_name_container, {[classes.dark_mode]: darkMode})}>
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