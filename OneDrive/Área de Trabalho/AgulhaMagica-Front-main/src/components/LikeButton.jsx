import { useState } from 'react';
import axios from 'axios';

import styles from '@/styles/Article.module.css';

export const LikeButton = ({ articleId, initialLikedCount }) => {
  const [likedCount, setLikedCount] = useState(initialLikedCount);

  const handleLike = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/api/articles/like/${articleId}`);
      const updatedArticle = response.data.updatedArticle;
      setLikedCount(updatedArticle.article_liked_count);
    } catch (error) {
      console.error('Erro ao adicionar like:', error.message);
    }
  };

  return (
    <>
      <section className={styles.likeContainer}>
        <span>{likedCount}</span>
        <button onClick={handleLike} className={styles.btn}>
          <i className='bx bxs-heart bx-sm'></i>
        </button>
      </section>
    </>
  );
};
