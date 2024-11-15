import { Footer } from '@/components/Footer'
import { Form } from '@/components/Form'
import { NavBar } from '@/components/NavBar'
import { useAuth } from '@/components/AuthContext'
import PrivateRoute from '@/components/PrivateRoute'
import { useRouter } from 'next/router';
import axios from 'axios';
import React from 'react'

export default function CreateArticle() {
  const { user } = useAuth();
  const router = useRouter();

  const formFields = [
    { 
      id: 1, 
      name: 'article_title', 
      type: 'text', 
      label: 'Título:', 
      required: true 
    },
    { 
      id: 2, 
      name: 'article_summary', 
      type: 'text', 
      label: 'Resumo:', 
      required: true 
    },
    { 
      id: 3, 
      name: 'article_keywords', 
      type: 'text', 
      label: 'Palavras-chave:', 
      required: true 
    },
    { 
      id: 4, 
      name: 'article_featured', 
      type: 'checkbox',
      label: 'Destaque', 
      value: 'true' 
    },
    { 
      id: 5, 
      name: 'article_body', 
      type: 'textarea', 
      label: 'Conteúdo:', 
      required: true 
    },
    { 
      id: 6, 
      name: 'article_author_email', 
      type: 'hidden', 
      defaultValue: user ? user.author_email : '' 
    },
    { 
      id: 7, 
      name: 'article_author_id', 
      type: 'hidden', 
      defaultValue: user ? user._id : '' 
    },
    { 
      id: 8, 
      name: 'article_author_name', 
      type: 'hidden', 
      defaultValue: user ? user.author_name : '' 
    },
  ];

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post("http://localhost:8080/api/articles/cadastro", formData);
      
      console.log(response.data);
      router.push(`/`);
    } catch (error) {
      console.error('Erro ao cadastrar artigo:', error.message);
    }
  };

  return (
    <>
      <PrivateRoute>
        <NavBar />
        <Form
          type={"Article"}
          formTitle="Cadastro de Artigos"
          formFields={formFields}
          buttonLabel="Cadastrar"
          onSubmit={handleSubmit}
        />
        <Footer />
      </PrivateRoute>
    </>
  )
}
