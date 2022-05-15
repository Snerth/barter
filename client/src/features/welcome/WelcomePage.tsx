import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import { ButtonColor } from "../types/Types";
import "./WelcomePage.css";

export const WelcomePage: React.FC<any> = () => {
  return (
    <div className="welcome-page-container">
      <div className="welcome-text">
        <div className="welcome-heading">Добро пожаловать в Barter</div>
        <span className="welcome-thesis">Нет денег? Не проблема! </span>
        Наша задача - позволить приобретать необходимые товары, не потратив при этом ни цента!
        Barter поможет Вам совершать безвалютный обмен товаров, гарантируя безопасность сделок.
        <div className="welcome-page-actions-container">
          <div className="welcome-page-action-section">
            <div>Новый пользователь?</div>
            <Link to="/sign-up">
              <Button buttonColor={ButtonColor.turquoise}>Зарегистрироваться</Button>
            </Link>
          </div>
          <div className="separator"></div>
          <div className="welcome-page-action-section">
            <div>Уже зарегистрированы?</div>
            <Link to="/sign-in">
              <Button buttonColor={ButtonColor.turquoise}>Войти</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
