import { useEffect, useState } from 'react';

const usePokemonTranslationType = () => {
	const [pokemonType, setPokemonType] = useState({});
	const typeTranslations = {
		normal: { name: '노말', icon: '/images/type/normal.svg' },
		fire: { name: '불꽃', icon: '/images/type/fire.svg' },
		water: { name: '물', icon: '/images/type/water.svg' },
		electric: { name: '전기', icon: '/images/type/electric.svg' },
		grass: { name: '풀', icon: '/images/type/grass.svg' },
		ice: { name: '얼음', icon: '/images/type/ice.svg' },
		fighting: { name: '격투', icon: '/images/type/fighting.svg' },
		poison: { name: '독', icon: '/images/type/poison.svg' },
		ground: { name: '땅', icon: '/images/type/ground.svg' },
		flying: { name: '비행', icon: '/images/type/flying.svg' },
		psychic: { name: '에스퍼', icon: '/images/type/psychic.svg' },
		bug: { name: '벌레', icon: '/images/type/bug.svg' },
		rock: { name: '바위', icon: '/images/type/rock.svg' },
		ghost: { name: '고스트', icon: '/images/type/ghost.svg' },
		dragon: { name: '드래곤', icon: '/images/type/dragon.svg' },
		dark: { name: '악', icon: '/images/type/dark.svg' },
		steel: { name: '강철', icon: '/images/type/steel.svg' },
		fairy: { name: '페어리', icon: '/images/type/fairy.svg' },
	};
	useEffect(() => {
		setPokemonType(typeTranslations);
	}, []);

	return pokemonType;
};

export default usePokemonTranslationType;
