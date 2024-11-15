import React from 'react'
import { AdminTable } from '@/components/AdminTable'
import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/NavBar'

import styles from '@/styles/PagesMain.module.css'

export default function Admin() {

  return (
    <>
      <NavBar/>
        <main className={styles.adminContainer}>
          <AdminTable/>
        </main>
      <Footer/>
    </>
  )
}
