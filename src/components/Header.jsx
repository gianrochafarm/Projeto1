
import styles from "./Header.module.css";

export function Header() {
	const usuarioLogado = localStorage.getItem("Email");

	// const deslogar = () => { 
	// 	localStorage.removeItem("Email");
	// 	// window.location.reload();	
	// };


	

	return (
		<div className={ styles.header }>
			
			{usuarioLogado ? <div className={styles.width150} >Sair</div> : 
				<div className={ styles.width150 } />}
			<img src="./src/assets/logo.png" alt="" />

			{usuarioLogado ? <span className={ styles.width150 } > {usuarioLogado} </span> :
				<span className={ styles.width150 } > Faça login. </span>}

		</div>
	);
}