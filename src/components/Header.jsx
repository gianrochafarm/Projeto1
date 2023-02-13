
import styles from "./Header.module.css";

export function Header() {
	const usuarioLogado = localStorage.getItem('Email');

	const deslogar = () => { 
		localStorage.removeItem('Email');
		window.location.reload();	
	}


	

	return (
		<div className={ styles.header }>
			
			{usuarioLogado ? <div className={styles.width150} onClick={deslogar}>Sair</div> : 
			<div className={ styles.width150 } />}
			<img src="https://storage.googleapis.com/showroom-bucket-images/store_images/a2c7ab789825b24eec9e-20221223_165202.jpg.png" alt="" />

			{usuarioLogado ? <span className={ styles.width150 } > {usuarioLogado} </span> :
			<span className={ styles.width150 } > Faça login. </span>}

		</div>
	);
}