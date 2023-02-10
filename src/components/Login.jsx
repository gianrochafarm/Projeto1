import { useState } from "react";
import "../home/global.css";
import styles from "./Login.module.css";


export function Login() {	

	

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorEmail, setErrorEmail] = useState("");
	const [errorPassword, setErrorPassword] = useState("");

	const handleChangeEmail = (e) => {
		setEmail(e);
		setErrorEmail("");
	};

	const handleChangePassword = (e) => {
		setPassword(e);
	};
	
	//  console.log(password);
	//  console.log(password.search(/[A-Z]/))
	//  console.log(password.search(/[a-z]/))
	//  console.log(password.search(/[0-9]/))
	//  console.log(password.search(/[\W]/))
	 

	const aplyForm = (e) => {
		e.preventDefault();
		if (email.length === 0) return setErrorEmail("Preencha o campo email.");
		if (!email.includes("@")) return setErrorEmail("Email fora dos padrões.");
		if (password.length === 0) return setErrorPassword("Preencha o campo senha.");
		if (password.search(/[A-Z]/) < 0) return setErrorPassword("Sua senha precisa de ao menos uma letra maiúscula.");
		if (password.search(/[a-z]/) < 0) return setErrorPassword("Sua senha precisa de ao menos uma letra minúscula.");
		if (password.search(/[0-9]/) < 0) return setErrorPassword("Sua senha precisa de ao menos um número.");
		if (password.search(/[\W]/) < 0) return setErrorPassword("Sua senha precisa de ao menos um caracter especial.");
		 localStorage.setItem("Email",email);
		
		
	};

	return (

		<form className={ styles.form } onSubmit={(e) => aplyForm(e)}>

			<div className={ styles.login}>
				<h1>Login</h1>
			</div>

			<div className={ styles.email }>
				<p>Seu e-mail:</p>
				
				<input 
					name='Seu email:' 
					size={25}
					value={email}
					onChange={(event)=> handleChangeEmail(event.target.value)}
					
				/>

			</div>
			{/* {errorEmail ? <span style={{color: "red"}}>{errorEmail}</span> : null} */}
			{errorEmail && <span style={{color: "red"}}>{errorEmail}</span>}

			<div className={ styles.senha }>
				<p>Sua senha:</p>
				<input  
					type="password" 
					name='Sua senha:' 
					size={25}
					value={password}
					onChange={(event)=> handleChangePassword(event.target.value)}
									
				/>
			</div>
			


			<div className={ styles.checkbox }>
				<input type="checkbox" />
                Manter-me logado.				
			</div>

			<div className={ styles.changePassword }>				
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