import React from "react";

function ICsale (props) {
    return (
        <section id="ICsale">
            <div className="ICsaleText">
            <h4>Р А С П Р О Д А Ж А</h4>
            <span>СКИДКА 50%</span>
            </div>
            <div className="ICsaleCore">
            {props.base.map( el => { 
                if ( el.core === "ind" ) {
                return (
                    <div className="ICsaleCoreBasket" key={ el.name }>
                    <img src={ el.src } alt="" />
                    <div>
                        <p>{ el.name }</p>
                        <span>{`${ el.price } ₽`}</span>
                    </div>
                    </div>
                )
                }
            } )}
            </div>
        </section>
    )
};

export default ICsale;