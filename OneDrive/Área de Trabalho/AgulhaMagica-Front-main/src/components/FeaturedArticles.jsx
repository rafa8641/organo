import React from 'react'
import Link from 'next/link';

import styles from '@/styles/ArticleHome.module.css';

export const FeaturedArticles = ({ articles }) => {
  return (
    <section className={styles.container}>
      <article className={styles.subTitle}>
        <h2>Publicações em Destaque</h2>
      </article>
      <section className={styles.groupContainer}>
        {articles.map((article) => (
          article.article_featured && (
            <Link key={article._id} href={`admin/articles/read/${article._id}`}>
              <section className={styles.newsContainer}>
                <section className={styles.imgContainer}>
                  <img src={article.kb_image || '/bg.jpg'} alt="Imagem do Artigo" />
                </section>
                <article className={styles.infoContainer}>
                  <h3>{article.article_title}</h3>
                  <p>{article.article_summary}</p>
                </article>
              </section>
            </Link>
          )
        ))}
      </section>
    </section>
  );
}
