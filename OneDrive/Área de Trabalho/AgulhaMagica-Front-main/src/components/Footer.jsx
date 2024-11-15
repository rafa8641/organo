import React from 'react'

import styles from '@/styles/Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <section>
        <p>Entre em contato: <br></br>(48) 0000-0000</p>
      </section>
      <section className={styles.footerLogo}>
       <img src='/Logo.png' alt='logo'></img>
        <p>Todos os direitos reservados © 2024</p>
      </section>
      <section>
        <img src="/CestaCroche.png" alt="CestaCroche"/>
      </section>
    </footer>
  )
}
