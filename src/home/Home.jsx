import { Login } from "../components/Login";
import "./global.css";
import styles from "./Home.module.css";
import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { Header } from "../components/Header";


export function Home() {
	 const navigate = useNavigate()
	useEffect(() => {
	  if (localStorage.getItem('Email'))
	  return navigate('/1')

	}, [])
	
	return (
		<div className={ styles.home }>	
			<Header/>		
			<Login />     
		</div>
	);
}

