import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import {signIn,useSession, signOut} from 'next-auth/react'

import styles from './styles.module.scss';
export function SignButton(){

    const {data: session}= useSession() // função do next auth para mostrar se o usuario esta logado ou nao

    console.log(session)
  

    return session ? (
        <button
        type="button"
        className={styles.signInButton} 
        onClick={() => signOut()}
        >
        <FaGithub color= "#04b361" />
        {session.user.name}
        <FiX color="#737380" className={styles.closeIcon} />

        </button>

    ) : (
        <button
        type="button"
        className={styles.signInButton} >
        <FaGithub color= "#eba417" 
        onClick={() => signIn('github')}
        
        />
        Sign in with Github

        </button>

    )
    
  
}