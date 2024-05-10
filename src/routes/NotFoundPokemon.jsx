import Modal from "../ui/Modal"
import classes from './NotFoundPokemon.module.scss';

const NotFoundPokemon = () => {
	return (
		<>
			<Modal>
				<div className={classes.NotFoundPokemon_container}>
					<p>포켓몬을 찾을 수 없습니다.</p>
				</div>
			</Modal>
		</>
	)
}

export default NotFoundPokemon;