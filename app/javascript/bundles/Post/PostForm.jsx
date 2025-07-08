import React, { useState } from 'react';
import api from '../../utils/api';
import '../../styles/post_form.css';

const PostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

     try {
      const response = await api.post("/posts", {
        post: { title, body },
      });
      onPostCreated(response.data);
      setTitle("");
      setBody("");
      setErrors({});
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.response.data);
      }
    }
  };

  return (
    <div className='post-form-container'>
      <h2>Crear Nueva Publicación</h2>

      <form onSubmit={handleSubmit} className="post-form">
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <div className="error">{errors.title.join(", ")}</div>}
          <textarea
            value={body}
            placeholder="Body"
            onChange={(e) => setBody(e.target.value)}
          />
          {errors.body && <div className="error">{errors.body.join(", ")}</div>}

        <button type="submit" className='btn-submit'>Create Post</button>
      </form>
    </div>
  );
};

export default PostForm;