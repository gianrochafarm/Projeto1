import { Leads } from "./Leads"
import { Agenda } from "./Agenda"
import { Clientes } from "./Clientes"



export function Appointments({text}) {

    if (text==='Cadastrar cliente'){
     return (<Leads/>)
    } 
    if (text==='Clientes'){
      return (<Clientes/>)
    }
    if (text==='Agenda'){
      return (<Agenda/>)
     }
}


