import { useState } from 'react';
import classes from './Search.module.scss';
import pokemonNameData from '../../data/PokemonNameData.js';
import { useNavigate } from 'react-router-dom';
import Modal from '../../ui/Modal.jsx';

const Search = () => {
	const navigate = useNavigate();
	const [searchData, setSearchData] = useState('');

	const searchHandler = (ev) => {
		setSearchData(ev.target.value)
	}

	const submitSearchForm = (ev) => {
		ev.preventDefault();
		console.log(searchData);
		
		const searchedPokemon = pokemonNameData.find(pokemon => pokemon.name === searchData);

		setSearchData('');

		if(searchedPokemon) {
			navigate(`/${searchedPokemon.id}`);
		} else {
			navigate(`/notFoundPokemon`);
		}
	}

	return (
		<>
			<div className={classes.search_wrap}>
				<div className={classes.search_container}>
					<form className={classes.search_form} onSubmit={submitSearchForm}>
						<input className={classes.search_input} type="text" placeholder='포켓몬 이름 또는 아이디를 입력해주세요' onChange={searchHandler} value={searchData}/>
						<button className={classes.search_btn}>
							<img src="/images/icon_search.png" alt="검색 아이콘" className={classes.search_icon}/>
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default Search;