import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => (
  <article className="teacher-item">
    <header>
      <img src="https://avatars0.githubusercontent.com/u/40572512?s=460&u=c58a405845df09980d26e73a527ca4135c4fb1a0&v=4" alt="Dioner Weiss" />
      <div>
        <strong>Dioner Weiss</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br />
      <br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas
      através de experiências.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="WhatsApp" />
        Entrar em contato
      </button>
    </footer>
  </article>
);

export default TeacherItem;
