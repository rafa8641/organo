import { React, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ArticleDetails } from '@/components/ArticleDetails';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import axios from 'axios'

import styles from '@/styles/PagesMain.module.css'

export default function ArticlePage() {

  const router = useRouter();
  const { pid } = router.query;
  const [articleDetails, setArticleDetails] = useState(null);

  useEffect(() => {
    const fetchArticle = async (articleId) => {
      try {
        const response = await axios.get(`http://localhost:8080/api/articles/${articleId}`);
        const articleData = response.data.foundArticle;
        setArticleDetails(articleData);
      } catch (error) {
        console.error('Erro ao buscar detalhes do artigo:', error.message);
      }
    };

    if (pid) {
      fetchArticle(pid);
    }
  }, [pid]);

  return (
    <>
      <NavBar/>
      <main className={styles.homeContainer}>
      {articleDetails ? (
          <ArticleDetails article={articleDetails} />
        ) : (
          <p>Carregando...</p>
        )}
      </main>
      <Footer/>
    </>
  )
}

export async function getServerSideProps(context) {
  const { pid } = context.params;

  try {
    const response = await axios.get(`http://localhost:8080/api/articles/${pid}`);
    const article = response.data.foundArticle;

    return {
      props: {
        article,
      },
    };
  } catch (error) {
    console.error('Erro ao buscar detalhes do artigo:', error.message);
    return {
      notFound: true,
    };
  }
}
