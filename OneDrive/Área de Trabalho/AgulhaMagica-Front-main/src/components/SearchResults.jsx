import { React, useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios'

import styles from '@/styles/ArticleHome.module.css';

export const SearchResults = ({ keywords }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/articles/search?keywords=${encodeURIComponent(keywords)}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Erro ao buscar resultados da pesquisa:', error.message);
      }
    };

    fetchSearchResults();
  }, [keywords]);

  return (
    <>
      <section className={styles.container}>
        <article className={styles.subTitle}>
          <h2>Resultados da Pesquisa</h2>
        </article>
        <section className={styles.groupContainer}>
          {searchResults.map((result) => (
            <Link key={result._id} href={`admin/articles/read/${result._id}`}>
              <section className={styles.newsContainer}>
                <section className={styles.imgContainer}>
                  <img src={result.kb_image || '/bg.jpg'} alt="Imagem" />
                </section>
                <article className={styles.infoContainer}>
                  <h3>{result.article_title}</h3>
                  <p>{result.article_summary}</p>
                </article>
              </section>
            </Link>
          ))}
        </section>
      </section>
    </>
  );
};

