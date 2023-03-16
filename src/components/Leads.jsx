import styles from "./Leads.module.css";
import { useState, useEffect } from "react";



export function Leads ({setClientes}) {
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [end, setEnd] = useState({cep:'', rua:'', numero:'', bairro:'', complemento:'', cidade:'', estado:''})

    useEffect(() => {
        let response = ''
        const encontraEndereco = async () => {
        const data = await fetch(`https://viacep.com.br/ws/${end.cep}/json/`);
            
        const json = await data
        response = data
        return data;
          }
        if (end.cep.length === 8) {
            setTimeout(() => {
                response = encontraEndereco();
              }, "1000");
              console.log(response)
        }

    }, [end.cep])
    


    const handleChangeName = (e) => {
		setName(e);
	};

    const handleChangeTel = (e) => {
		setTel(e);
	};
    
    return (
        <div>            
        <form className={ styles.form } onSubmit={setClientes} >
            <label className={ styles.cadastro}>
				<h1>Cadastrar Cliente</h1>
			</label>


            <label className={ styles.dados }>
                <p>Nome completo</p>
                <input 
                type="text"
                value={name} 
                onChange={(event)=> handleChangeName(event.target.value)}/>           
            </label>

            <label className={ styles.dados }>
                <p>Número de Telefone</p>
                <input 
                type="text"
                value={tel}
                onChange={(event)=> handleChangeTel(event.target.value)}
                />           

        
            </label>
            <label className={ styles.dados }>
                <p>Endereço</p>
                <input className={ styles.dados } placeholder="Cep" type="text" onChange={(event)=>setEnd({...end, cep:event.target.value})}/> <br />
                <input className={ styles.dados } placeholder="Bairro" type="text" /> <br />
                <input className={ styles.dados } placeholder="Rua" type="text" /> <br />
                <input className={ styles.dados } placeholder="Número" type="text" /> <br />
                <input className={ styles.dados } placeholder="Complemento" type="text" /> <br />
                <input className={ styles.dados } placeholder="Cidade" type="text" /> <br />
                <input className={ styles.dados } placeholder="Estado" type="text" /> <br />
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