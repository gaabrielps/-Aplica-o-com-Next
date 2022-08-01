import { SignButton } from '../Button'
import styles from './styles.module.scss'
import logo from '../../../public/images/logo.svg'


export function Header () {
    return (
        <header className={styles.headerContainer}>
            <div  className={styles.headerContent}>
                <h1>LOGO</h1>
                <nav>
                    <a className={styles.active} >Home</a>
                    <a>Posts</a>
                </nav>
                <SignButton/>
            </div>
        </header>
    )
}