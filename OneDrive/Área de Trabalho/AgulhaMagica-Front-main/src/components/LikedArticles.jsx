import React from 'react'
import Link from 'next/link';

import styles from '@/styles/ArticleHome.module.css';

export const LikedArticles = ({ articles }) => {

  const sortedArticles = articles.sort((a, b) => b.article_liked_count - a.article_liked_count);

  return (
    <section className={styles.container}>
      <article className={styles.subTitle}>
        <h2>Publicações Mais Curtidas</h2>
      </article>
      <section className={styles.groupContainer}>
        {sortedArticles.map((article) => (
          <Link key={article._id} href={`admin/articles/read/${article._id}`}>
            <section className={styles.newsContainer}>
              <section className={styles.imgContainer}>
                <img src={article.kb_image || '/bg.jpg'} alt="" />
              </section>
              <article className={styles.infoContainer}>
                <h3>{article.article_title}</h3>
                <p>{article.article_summary}</p>
              </article>
            </section>
          </Link>
        ))}
      </section>
    </section>
  );
}
