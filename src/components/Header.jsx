
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import Drawer from './Drawer'



export function Header({setOptionSelected}) {

	const usuarioLogado = localStorage.getItem('Email');
	let navigate = useNavigate();
	

	return (
		<div className={ styles.header }>
			
			{usuarioLogado ? <div className={ styles.menu }> <Drawer setOptionSelected={setOptionSelected}/> </div> : 
			<div className={ styles.width150 } />}
			<img src="https://storage.googleapis.com/showroom-bucket-images/store_images/a2c7ab789825b24eec9e-20221223_165202.jpg.png" alt="" />

			{usuarioLogado ? <span className={ styles.width150 } > {usuarioLogado} </span> :
			<span className={ styles.width150 }> Faça login. </span>}

		</div>
	);
}