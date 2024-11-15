import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { BarraPesquisa } from '@/components/BarraPesquisa'
import { FeaturedArticles } from '@/components/FeaturedArticles'
import { LikedArticles } from '@/components/LikedArticles'
import { useState, useEffect } from 'react'
import axios from 'axios'

import styles from '@/styles/PagesMain.module.css'

export default function Home() {

  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const resposta = await axios.get('http://localhost:8080/api/articles/all');
      const articleData = resposta.data;
      setArticles(articleData);
      console.log(articleData)
    } catch (erro) {
      console.error('Erro ao buscar artigos:', erro.message);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <NavBar />
      <main className={styles.homeContainer}>
        <article className={styles.title}>
          <h1>Kpop Events</h1>
        </article>
        <BarraPesquisa />
        <FeaturedArticles
          articles={articles}
        />
        <LikedArticles
          articles={articles}
        />
      </main>
      <Footer />
    </>
  )
}
