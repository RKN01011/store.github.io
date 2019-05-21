import React from "react";

function ICForm () {
    return (
        <section id="ICForm">
            <div className="ICFormLeft">
            <form>
                <input type="text" placeholder="Имя *" />
                <input type="email" placeholder="Email *" />
                <input type="text" placeholder="Тема" />
                <textarea placeholder="Сообщение"></textarea>
                <span> ОТПРАВИТЬ </span>
            </form>
            </div>
            <div className="ICFormRight">
            <div data-rightcore>
                <h4> К О Н Т А К Т Ы </h4>
                <p> Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт. </p>
            <span> info@mysite.ru </span> 
            <span> Телефон: +7 (495) 000-00-00 </span>
            </div>
            </div>
        </section>
        )
    
};

export default ICForm;