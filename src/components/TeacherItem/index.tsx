import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css'
function TeacherItem(){
    return(
        <article className="teacher-item">
                <header>
                    <img src="https://avatars3.githubusercontent.com/u/55514882?s=400&u=53431660bdc6db0ea96e8ba4e47a868df8052e05&v=4" alt=""/>
                    <div>
                        <strong>
                            Mateus Silveira Pires
                        </strong>
                        <span>Programação</span>
                    </div>
                </header>
                <p>
                    Entusiasta das melhores tecnologias 
                    <br />
                    <br />
                    Apaixonador por codar
                </p>
                <footer>
                    <p>
                        preço/hora
                        <strong>R$ 30,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="WhatsApp"/>
                        Entrar em contato
                    </button>
                </footer>
            </article>
    )
}

export default TeacherItem;