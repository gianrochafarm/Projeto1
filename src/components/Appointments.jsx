import { Leads } from "./Leads"
import { Agenda } from "./Agenda"
import { Clientes } from "./Clientes"
import { useState } from "react"



export function Appointments({text}) {
 const [clientes, setClientes] = useState([])

    if (text==='Cadastrar cliente'){
     return (<Leads setClientes={setClientes}/>)
    } 
    if (text==='Clientes'){
      return (<Clientes clientes={clientes}/>)
    }
    if (text==='Agenda'){
      return (<Agenda/>)
     }
}


