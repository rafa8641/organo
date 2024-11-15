import {useEffect, React} from 'react';
import Link from 'next/link';
import { useAuth } from './AuthContext';

import styles from '@/styles/NavBar.module.css';

export const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <header className={styles.headerContainer}>
      <section className={styles.logo}>
        <img src='/Logo.png' alt='logo'></img>
      </section>
      <section className={styles.navContainer}>
        <nav>
          <ul>
            <Link href="/">
              <li>Tutorial de Pontos</li>
            </Link>
            <Link href="/contador">
              <li>Contador</li>
            </Link>
            <Link href="/">
              <li>Receitas</li>
            </Link>

            {user ? (
              <>
                {(
                  <Link href="/admin">
                    <li>Admin</li>
                  </Link>
                )}
                <li onClick={logout}>Logout</li>
              </>
            ) : (
              <Link href="/login">
                <li>Login</li>
              </Link>
            )}


          </ul>
        </nav>
      </section>
    </header>
  );
};
