import classes from './PokemonTypeContainer.module.scss';

import usePokemonTranslationType from '../../hooks/usePokemonTranslationType'
/**
 * PokemonTypeContainer 컴포넌트
 * props: 
 * - pokemonType: 포켓몬 타입을 요구합니다.
 */
const PokemonTypeContainer = (props) => {

	const pokemonType = usePokemonTranslationType();
	return (
		<div className={classes.type_container}>
			{ props.pokemonType.map((type) => (
				<div key={ type.slot } className={ classes[type.type.name] }>
					{ pokemonType[type.type.name] && (
						<>
							<img src={ pokemonType[type.type.name].icon } alt={ pokemonType[type.type.name].name } />
							<span>{ pokemonType[type.type.name].name }</span>
						</>
					) }
				</div>))
			}
		</div>
	)
}

export default PokemonTypeContainer;