import { Header } from '../components/Header'
import { Login } from '../components/Login'
import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <div className={ styles.app }>
<Header />

<Login /> 
    
    </div>
  )
}

export default App
