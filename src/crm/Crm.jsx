import { Appointments } from "../components/Appointments"
import "../home/global.css";
import styles from "./Crm.module.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Leads } from "../components/Leads";




export function Crm () {
	const [optionSelected, setOptionSelected] = useState("Agenda");	

    let navigate = useNavigate();

    useEffect(() => {
      if(!localStorage.getItem('Email'))
      return navigate('/')    
    }, [])
    
    

    return localStorage.getItem('Email') &&    
        (<div className={ styles.crm }>
            <Header setOptionSelected={setOptionSelected}/>		
            <Appointments text={optionSelected}/>

        </div>      
    )
}