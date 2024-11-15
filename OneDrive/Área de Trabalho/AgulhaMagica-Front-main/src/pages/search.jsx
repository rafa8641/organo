import { useRouter } from 'next/router';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { SearchResults } from '@/components/SearchResults';
import { BarraPesquisa } from '@/components/BarraPesquisa';

import styles from '@/styles/PagesMain.module.css'

export default function Search() {

  const router = useRouter();
  const { keywords } = router.query;

  return (
    <>
      <NavBar />
      <main className={styles.homeContainer}>
        <article className={styles.title}>
          <h1>Kpop Events</h1>
        </article>
        <BarraPesquisa />
        <SearchResults keywords={keywords} />
      </main>
      <Footer />
    </>
  );
};

