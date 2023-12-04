import React, { useState } from 'react';

const Card = ({ info }) => {
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    <div className="card">
      <img src={info.image} alt={info.name} />
      <button onClick={handleLike}>Like ({likes})</button>
      <button>Ver Comentarios</button>
      <p>{info.description}</p>
      <div>
        <input
          type="text"
          placeholder="Añade un comentario..."
          value={comment}
          onChange={handleCommentChange}
        />
        <button onClick={handleCommentSubmit}>Enviar</button>
      </div>
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
    </div>
  );
};

export default Card;
