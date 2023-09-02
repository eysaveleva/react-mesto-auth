import React, { useContext } from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import Card from './Card.js';

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardDeleteClick, onCardDelete, onCardLike, cards }) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile-image">
          <img
            className="profile-image__avatar"
            src={currentUser.avatar ? currentUser.avatar : "#"}
            alt="Аватар"
          />
          <button
            className="profile-image__change-button"
            type="button"
            aria-label="Изменить аватар"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <div className="profile__block">
            <h1 className="profile__title">{currentUser.name ? currentUser.name : ''}</h1>
            <button
              className="profile__edit-btn"
              type="button"
              title="Редактировать"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__subtitle">{currentUser.about ? currentUser.about : ''}</p>
        </div>
        <button
          className="profile__add-btn"
          type="button"
          title="Добавить"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements" aria-label="Различные фотографии">
        {cards.map((data) => (
          <Card
            key={data['_id']}
            card={data}
            onCardClick={onCardClick}
            onCardDelete={onCardDelete}
            onCardLike={onCardLike}
            onCardDeleteClick={onCardDeleteClick}
          />
        ))}
      </section>
    </main>
  );
}