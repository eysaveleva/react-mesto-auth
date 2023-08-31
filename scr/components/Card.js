import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function Card({card, onCardClick, onCardDeleteClick, onCardLike, onCardDelete}) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `element__like-btn ${isLiked && 'element__like-btn_active'}`
  );

   function handleLikeClick() {
    onCardLike(card);
  };

  function handleDeleteClick() {
    onCardDeleteClick(card);
  };

  return (
    <div className="element">
      {isOwn &&
      <button className="element__delete"
        type="button"
        aria-label="удалить"
        onClick={handleDeleteClick}/>
      }
      <div className="element__image"
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={() => onCardClick({link: card.link, name: card.name})}
      />
      <div className="element__title">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__like-block">
          <button type="button" className={cardLikeButtonClassName}  title="like"  onClick={handleLikeClick}></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}