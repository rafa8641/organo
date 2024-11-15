import React from 'react'

import styles from '@/styles/Form.module.css'

export const Form = ({ type, formTitle, formFields, buttonLabel, onSubmit }) => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {};
    formFields.forEach((field) => {
      if (field.type === 'checkbox') {
        formData[field.name] = e.target[field.name].checked;
      } else {
        formData[field.name] = e.target[field.name].value;
      }
    });

    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const getMainContainerClassName = (formType) => {
    if (formType === 'Article') {
      return styles.mainCtnArticle;
    } else {
      return styles.mainContainer;
    }
  }

  const getContainerClassName = (formType) => {
    if (formType === 'Article') {
      return styles.cntArticle;
    } else {
      return styles.container;
    }
  }

  const getSectionClassName = (field) => {
    if (field.type === 'checkbox') {
      return styles.check;
    } else if (field.type === 'textarea') {
      return styles.contentText;
    } else if (field.type === 'file') {
      return styles.file;
    } else if(field.type === 'hidden'){
      return styles.hidden
    } else {
      return styles.inputBox;
    }
  };

  const getLabelClassName = (field, formTitle) => {
    if (field.type === 'email' && formTitle !== 'Cadastro de Usuário') {
      return styles.emailInput;
    } else {
      return '';
    }
  };

  return (
    <section 
      className={getMainContainerClassName(type)}
    >
      <article className={getContainerClassName(type)}>
        <form
          method='post'
          encType='multipart/form-data'
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <h1 className={styles.title}>{formTitle}</h1>
          {formFields.map((field) => (
            <section
              key={field.id}
              className={getSectionClassName(field)}
            >
              {field.type !== 'checkbox' && field.type !== 'file' && field.type !== 'textarea' && (
                <>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    defaultValue={field.defaultValue}
                    // value={formValues[field.name] || ''}
                    required={field.required}
                    readOnly={field.readOnly}
                    // onChange={handleChange}
                  />
                  <label 
                    htmlFor={field.name} 
                    className={getLabelClassName(field, formTitle)}
                  >
                    {field.label}
                  </label>
                </>
              )}
              {field.type === 'checkbox' && (
                <>
                  <label htmlFor={field.name}>{field.label}</label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    defaultValue={field.defaultValue}

                  />
                </>
              )}
              {field.type === 'file' && (
                <>
                  <label htmlFor={field.name}>{field.label}</label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    accept="image/*"
                    // onChange={handleChange}
                  />
                </>
              )}
              {field.type === 'textarea' && (
                <>
                  <label htmlFor={field.name}>{field.label}</label>
                  <textarea
                    id={field.name}
                    name={field.name}
                    defaultValue={field.defaultValue}
                    // value={formValues[field.name] || ''}
                    required={field.required}
                    // onChange={handleChange}
                  />
                </>
              )}
            </section>
          ))}
          <button
            type="submit"
            className={styles.btn}
          >
            {buttonLabel}
          </button>
        </form>
      </article>
    </section>
  );
};
