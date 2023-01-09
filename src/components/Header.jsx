
import styles from './Header.module.css'

export function Header() {

    return (
        <div className={ styles.header }>
            <div className={ styles.width150 } />
            <img src="./src/assets/logo.png" alt="" />
            <span className={ styles.width150 } >Email digitado no Login.</span>
        </div>
        )
}