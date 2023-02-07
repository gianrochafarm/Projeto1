/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import {useState, useEffect} from "React";
import "../home/global.css";
import styles from "./Login.module.css";
export function Login() {	
	const [email, setEmail] = useState("");
	
	const handleChangeEmail = (e) => {
		setEmail(e);
	};

	//localStorage.setItem => Coloca um valor para uma variável no localStorage
	//localStorage.getItem => Retorna o valor salvo de uma varíavel no localStorage
	//localStorage.removeItem => Apaga o valor de uma variável no localStorage

	const applyForm = () => {
		if (email.length === 0 ) return (alert("Email vazio"));
		if (!email.includes("@")) return alert("Email fora dos padrões");
			
		
		localStorage.setItem("goiaba", email);

	};

	const pegaUsuarioLogado = () => {
		const temUsuarioLogado = localStorage.getItem("email-projeto1");
		return alert(temUsuarioLogado);
	};
	

	return (

		<form className={ styles.form } onSubmit={applyForm}>

			<div className={ styles.login}>
				<h1>Login</h1>
			</div>

			<div className={ styles.email }>
				<p>Seu e-mail:</p>
				<input 
					value={email}
					// type="email" 
					name='Seu email:'
					placeholder='Digite seu email aqui'
					onChange={(event) => handleChangeEmail(event.target.value)} 
					size={25}
					
								
					
				/>
			</div>

			<div className={ styles.senha }>
				<p>Sua senha:</p>
				<input  
					type="password" 
					name='Sua senha:' 
					size={25}
									
				/>
			</div>

			<div className={ styles.checkbox }>
				<input type="checkbox" />
                Manter-me logado.				
			</div>

			<div onClick={pegaUsuarioLogado} className={ styles.changePassword }>				
				<a href="">Esqueceu sua senha?</a>
			</div>

			<div className={ styles.button } >
				<input 
					type="submit" 
					value={"Logar"}
					
				/>                
			</div>

		</form>
	);
}