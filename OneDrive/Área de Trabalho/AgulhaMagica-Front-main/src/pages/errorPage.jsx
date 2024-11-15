import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/NavBar'
import React from 'react'

import styles from '@/styles/ErrorPage.module.css'
import mainStyle from '@/styles/PagesMain.module.css'

export default function ErrorPage() {
  return (
    <>
      <NavBar />
      <main className={mainStyle.homeContainer}>
        <section className={styles.container}>
          <h1>Erro!</h1>
          <h2>Você não tem permissão para acessar essa página!</h2>
        </section>
      </main>
      <Footer />
    </>
  )
}
