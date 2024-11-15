import { useRouter } from 'next/router';
import { Footer } from '@/components/Footer';
import { Form } from '@/components/Form';
import { NavBar } from '@/components/NavBar';
import axios from 'axios';

export default function EditArticle({ article }) {
  const router = useRouter();
  const { pid } = router.query;

  const formFields = [
    { 
      id: 1, 
      name: 'article_title', 
      type: 'text', 
      label: 'Título:', 
      defaultValue: article.article_title, 
      required: true 
    },
    { 
      id: 2, 
      name: 'article_keywords', 
      type: 'text', 
      label: 'Palavras-chave:', 
      defaultValue: article.article_keywords, 
      required: true 
    },
    { 
      id: 3, 
      name: 'article_author_email', 
      type: 'email', 
      label: 'Email do Autor:',
      defaultValue: article.article_author_email, 
      required: true 
    },
    { 
      id: 4, 
      name: 'article_featured', 
      type: 'checkbox', 
      label: 'Destaque', 
      defaultChecked: article.article_featured 
    },
    { 
      id: 5, 
      name: 'article_body', 
      type: 'textarea', 
      label: 'Conteúdo:', 
      defaultValue: article.article_body, 
      required: true 
    }
  ];

  const initialFormData = {
    article_title: article.article_title,
    article_keywords: article.article_keywords,
    article_author_email: article.article_author_email,
    article_featured: article.article_featured,
    article_body: article.article_body,
  };

  const handleUpdateArticle = async (formData) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/articles/${pid}`, formData, { withCredentials: true });
      router.push(`/`);
    } catch (error) {
      console.error('Erro ao atualizar o artigo:', error.message);
    }
  };

  return (
    <>
      <NavBar />
      <Form
        type={"Article"}
        formTitle={`Atualizar Artigo: ${article.article_title}`}
        formFields={formFields}
        buttonLabel="Atualizar Artigo"
        onSubmit={handleUpdateArticle}
        initialFormData={initialFormData}
      />
      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const response = await axios.get(`http://localhost:8080/api/articles/${params.pid}`);
    const article = response.data.foundArticle;
    return { props: { article } };
  } catch (error) {
    console.error('Erro ao obter detalhes do artigo:', error.message);
    return { notFound: true };
  }
}
