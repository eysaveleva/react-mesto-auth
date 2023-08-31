import React from "react";
import ErrImage from '../images/ErrImage.svg';
import OkImage from '../images/OkImage.svg';

export default function InfoTooltip(props) {
  return (
    <div className={`popup popup-reg ${props.isOpen ? 'popup_opened' : false}`} >
      <div className="popup__container popup__container-reg">
        <button
          onClick={props.onClose}
          className="popup__close-btn"
          type="button">
        </button>
        <img src={props.status ? OkImage : ErrImage} alt="Результат операции" className="popup-reg__image" />
        <h1 className="popup-reg__title">
          {props.status
          ? "Вы успешно зарегистрировались!"
          : "Что-то пошло не так! Попробуйте ещё раз."}
        </h1>
      </div>
    </div>
  )
}