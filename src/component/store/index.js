import React, {Component} from "react";
import { connect } from "react-redux"

import Nav from "../nav"
import AsideMenu from "../nav/asideMenu"
import Footer from "../nav/footer"

var n = -40

function slider ( e ) {
    let polosa = document.getElementsByClassName("polosa")[0];
    let newSaleSliderLeft = document.querySelector(".newSaleSliderLeft");
    let newSaleSliderRight = document.querySelector(".newSaleSliderRight");
    let dWidth = ( polosa.children.length - 3 ) * 20;
    if ( e.target.dataset.left === "true" ) {
    (n === -dWidth) ? n = -dWidth : n = n - 20;
    }
    else 
    (n === 0) ? n =  0 : n = n + 20;
    polosa.style.left = `${n}vw`

    if (polosa.style.left === `${-dWidth}vw`)
    newSaleSliderLeft.classList.add("opacy")
    else 
    newSaleSliderLeft.classList.remove("opacy")

    if (polosa.style.left === `0vw`)
    newSaleSliderRight.classList.add("opacy")
    else 
    newSaleSliderRight.classList.remove("opacy")
}

class StoreCore extends Component {
    render() {
        return (
            <React.Fragment>
            <Nav />
            <AsideMenu />
            <section id="newSale">
            <div className="newSaleDiv">
            <div className="newSaletext"> НОВЫЕ{"\u00A0" }ПОСТУПЛЕНИЯ </div>
            <div className="newSaleSlider">
            <div className="newSaleSliderLeft" data-left onClick={slider}/>
            <div className="newSaleSliderDisplay">
            <div className="polosa" style={{left: `-40vw`}}>{
                this.props.base.map(el => {
                if ( el.sale === "new" ) {
                return (
                    <div className="basketBlock" key={el.name}>
                    <div className="basketBlockImg">
                        <img src={el.src}/>
                        <div className="goPay"> БЫСТРЫЙ ПРОСММОТР </div>
                    </div>
                    <div className="basketBlockText">
                    <span>{el.name}</span>
                    <p>{el.price} ₽</p>
                    </div>
                    </div>
                )
            }
        } ) }</div>
            </div>
            <div className="newSaleSliderRight" onClick={slider} />
            </div>
            <div className="allBasket">
            <div className="newSaletext"> ВСЕ{"\u00A0" }РЮКЗАКИ </div> 
            <div className="polosa polosaWrap">{
                this.props.base.map(el => {
                return (
                    <div className="basketBlock basketBlockAllbook" key={el.name}>
                    <div className="basketBlockImg">
                        <img src={el.src}/>
                        <div className="goPay"> БЫСТРЫЙ ПРОСММОТР </div>
                    </div>
                    <div className="basketBlockText">
                    <span>{el.name}</span>
                    <p>{el.price} ₽</p>
                    </div>
                    </div>
                )
        } ) }</div> 
            </div>
            </div>
            </section>
            <Footer />
            </React.Fragment>
        )
    }
}

export default connect(
    (store)=>{
  return {
    base: store.basket,
  }
    },
  ) (StoreCore)