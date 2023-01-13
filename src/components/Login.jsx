import "../home/global.css";
import styles from "./Login.module.css";

export function Login() {

	return (
		<form className={ styles.form }>


			<div className={ styles.login}>
				<h1>Login</h1>
			</div>

			<div className={ styles.input }>
				<p>Seu e-mail:</p>
				<input type="email" name='Seu email:' size={25} />
			</div>

			<div className={ styles.input }>
				<p>Sua senha:</p>
				<input  type="password" name='Sua senha:' size={25} />
			</div>

			<div className={ styles.checkbox }>
				<input type="checkbox" />
                Manter-me logado.				
			</div>

			<div className={ styles.changePassword }>				
				<a href="">Esqueceu sua senha?</a>
			</div>

			<div className={ styles.button }>
				<input type="submit" value={"Logar"} />                
			</div>

        
		</form>
	);
}