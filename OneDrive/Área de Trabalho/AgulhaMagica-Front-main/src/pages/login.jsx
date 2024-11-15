import { Footer } from '@/components/Footer'
import { LoginForm } from '@/components/LoginForm'
import { NavBar } from '@/components/NavBar'
import React from 'react'

import styles from '@/styles/PagesMain.module.css'

export default function Login() {
  
  return (
    <>
      <NavBar/>
      <main className={styles.loginContainer}>
        <LoginForm/>
      </main>
      <Footer/>
    </>
  )
}
