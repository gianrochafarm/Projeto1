import styles from "./Leads.module.css";

export function Leads () {
    return (
        <div>            
        <form className={ styles.form } >
            <label className={ styles.cadastro}>
				<h1>Cadastrar Cliente</h1>
			</label>
            <label className={ styles.dados }>
                <p>Nome completo</p>
                <input type="text" />
            </label>
            <label className={ styles.dados }>
                <p>Endereço</p>
                <input type="text" />
            </label>
            <label className={ styles.dados }>
                <p>Número de Telefone</p>
                <input type="text" />
            </label>
            <label className={ styles.dados }>
                <p>Plano</p>
                <select name="Escolha um plano" >
                    <option value="">Escolha um plano</option>
                    <option value="aula">Aula Avulsa</option>
                    <option value="plano1">Plano 4 aulas</option>
                    <option value="palno2">Plano 8 aulas</option>
                </select>
            </label>

            <label className={ styles.button } >
				<input 
					type="submit" 
					value={"Cadastrar"}
				/>
            </label>    

                        

        </form>
        </div>
    )

        
}