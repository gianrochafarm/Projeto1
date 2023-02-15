import { useState } from "react";
import "../home/global.css";
import styles from "./Login.module.css";


export function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorEmail, setErrorEmail] = useState('');
	const [errorPassword, setErrorPassword] = useState('');
	const [register, setRegister] = useState(false);
	const [confirmPass, setConfirmPass] = useState('');
	const [createPass, setCreatePass] = useState('');
	const [errorConfirmPass, setErrorConfirmPass ] = useState('');



	const handleChangeEmail = (e) => {
		setEmail(e);
		setErrorEmail('');
	};

	const handleChangePassword = (e) => {
		setPassword(e);
		setErrorPassword('');
	};

	const handleConfirmPassword = (e) => {
		setConfirmPass(e);
		setErrorPassword('');
	}

	 const handleCreatePassword = (e) => {
		setCreatePass(e);
		setErrorPassword('');
	 }

	const toggle = (e) => {
		e.preventDefault();
		setRegister(!register)
		setErrorPassword('');
		setErrorEmail('');
		setEmail('');
		setPassword('');
		setConfirmPass('');
		setCreatePass ('');	
		setErrorConfirmPass('');
	}
	 

	const aplyFormRegister = (e) => {
		e.preventDefault('');
		if (email.length === 0) return setErrorEmail('Por favor, insira seu email.');
		if (!email.includes('@')) return setErrorEmail('Email fora dos padrões.');
		if (createPass.length === 0) return setErrorPassword('Por favor, insira sua senha.');
		if (createPass.length === 0) return setErrorPassword('Por favor, insira sua senha.');
		if (createPass.search(/[A-Z]/) < 0) return setErrorPassword('Sua senha precisa de ao menos uma letra maiúscula.');
		if (createPass.search(/[a-z]/) < 0) return setErrorPassword('Sua senha precisa de ao menos uma letra minúscula.');
		if (createPass.search(/[0-9]/) < 0) return setErrorPassword('Sua senha precisa de ao menos um número.');
		if (createPass.search(/[\W]/) < 0) return setErrorPassword('Sua senha precisa de ao menos um caracter especial.');
		if (confirmPass.length === 0) return setErrorConfirmPass('Por favor, confirme sua senha.');
		if (confirmPass !== createPass) return setErrorConfirmPass('Senhas diferentes');
		window.location.reload();
		return localStorage.setItem('Email',email);		

	};

	const aplyFormLogin = (e) => {
		e.preventDefault('');
		if (email.length === 0) return setErrorEmail('Por favor, insira seu email.');
		if (!email.includes('@')) return setErrorEmail('Email fora dos padrões.');
		if (password.length === 0) return setErrorPassword('Por favor, insira sua senha.');
		window.location.reload();
		return localStorage.setItem('Email',email);		

	};
	
	if(!register){

	return (

		<form className={ styles.form } onSubmit={aplyFormLogin} autoComplete='off'>

			<div className={ styles.login}>
				<h1>Login</h1>
			</div>

			 <div className={errorEmail ? styles.errorEmail : styles.email }> 
				<p>Seu e-mail:</p>

				<input 
					name='Seu email:' 
					size={25}
					value={email}
					onChange={(event)=> handleChangeEmail(event.target.value)}															
				/>
			</div> 

			<div>
			{errorEmail && <span className={styles.errorAlert}>{errorEmail}</span>}
			</div>

			
			<div className={errorPassword ? styles.errorPassWord : styles.password}>
				<p>Sua senha:</p>
				
				<input  
					type="password" 
					name='Sua senha:' 
					size={25}
					value={password}
					onChange={(event)=> handleChangePassword(event.target.value)}									
				/>
			</div> 

			<div>
			{errorPassword && <span className={styles.errorAlert}>{errorPassword}</span>}
			</div>

			<div className={ styles.checkbox }>
				<input type="checkbox" />
                Manter-me logado.				
			</div>

			<div className={ styles.changePassword }>				
				<a onClick={toggle} href=""> Cadastre-se.</a>
			</div>

			<div className={ styles.button } >
				<input 
					type="submit" 
					value={"Logar"}
					

				/>                
			</div>

        
		</form>
		
	);}

	return (
	<form className={ styles.form } onSubmit={aplyFormRegister} autoComplete='off'>

	<div className={ styles.login}>
		<h1>Cadastro</h1>
	</div>

	 <div className={errorEmail ? styles.errorEmail : styles.email }> 
		<p>Seu e-mail:</p>

		<input 
			name='Seu email:' 
			size={25}
			value={email}
			onChange={(event)=> handleChangeEmail(event.target.value)}															
		/>
	</div> 

	<div>
	{errorEmail && <span className={styles.errorAlert}>{errorEmail}</span>}
	</div>

	
	<div className={errorPassword ? styles.errorPassWord : styles.password}>
		<p>Digite uma senha:</p>
		
		<input  
			type="password" 
			name='Sua senha:' 
			size={25}
			value={createPass}
			onChange={(event)=> handleCreatePassword(event.target.value)}									
		/>
	</div> 

	<div>
	{errorPassword && <span className={styles.errorAlert}>{errorPassword}</span>}
	</div>

	<div className={errorConfirmPass ? styles.errorPassWord : styles.password}>
		<p>Confirme sua senha:</p>
		
		<input  
			type="password" 
			name='Sua senha:' 
			size={25}
			value={confirmPass}
			onChange={(event)=> handleConfirmPassword(event.target.value)}									
		/>
	</div> 

	<div>
	{errorConfirmPass && <span className={styles.errorAlert}>{errorConfirmPass}</span>}
	</div>


	<div className={ styles.changePassword }>				
		<a onClick={toggle} href="">Sou cadastrado.</a>
	</div>

	<div className={ styles.button } >
		<input 
			type="submit" 
			value={"Registrar"}
			

		/>                
	</div>


</form>)
		
	
}