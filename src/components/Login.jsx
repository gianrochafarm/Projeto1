import {useState, useEffect} from "React";
import "../home/global.css";
import styles from "./Login.module.css";
export function Login() {	
	const [email, setEmail] = useState("");
	
	const handleChangeEmail = (e) => {
		setEmail(e);
	};

	const applyForm = () => {
		if (email.length === 0 ) return (alert("Email vazio"));
		if (!email.includes("@")) return alert("Email fora dos padrões");
			
		return alert("Usuário foi logado");
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