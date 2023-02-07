/* eslint-disable indent */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style

import styles from "./Header.module.css";

export function Header() {
	const emailUsuarioLogado = localStorage.getItem("email-projeto1"); // se tiver usuário logado vai retornar o email. Se não tiver, vai retornar false

	const deslogar = () => {
		localStorage.removeItem("email-projeto1");
		window.location.reload();
	};

	return (
		<div className={ styles.header }>

			{emailUsuarioLogado ? <div onClick={deslogar} style={{cursor: "pointer"}} className={ styles.width150 }> Sair </div> : <div className={ styles.width150 } />}

			<img src="./src/assets/logo.png" alt="" />

			{emailUsuarioLogado ? 
			<span className={ styles.width150 } >
				{emailUsuarioLogado}
			</span> :
			<span className={ styles.width150 } >
				Email digitado no Login.
			</span>}

		</div>
	);
}