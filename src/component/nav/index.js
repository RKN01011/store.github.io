import React, {Component} from "react";
import {Link as LinkR} from "react-router-dom"
import { Link, Element , Events, animateScroll } from "react-scroll"

function button(e) {
    if (e.target.dataset.contentdiler !== "true") return
    let index = [].indexOf
    let buttonMobMenu = document.getElementsByClassName("buttonMobMenu")[0].classList
    let asideMenu = document.getElementById("asideMenu").classList
    if (index.call(asideMenu, "close") === 0) {
    buttonMobMenu.remove("menu")
    buttonMobMenu.add("cross")
    asideMenu.remove("close")
    asideMenu.add("open")
    }
    else if (index.call(asideMenu, "close") === -1) {
    buttonMobMenu.remove("cross")
    buttonMobMenu.add("menu")
    asideMenu.remove("open")
    asideMenu.add("close")
    }
}

class nav extends Component { 
    render() {
    return (
        <nav onClick={button}>
            <div className="navLeft"> 
                <span data-leftspan>СЕВЕРНЫЙ</span><span data-rightspan>ПОЛЮС</span>
            </div>
            <div className="navRight">
            <div className="buttonMobMenu menu" data-contentdiler/>
            <ul>
                <li>
                <Link to="IChead">
                <LinkR to="/"> ГЛАВНАЯ </LinkR> 
                </Link>
                </li>
                <li><LinkR to="/StoreCore">МАГАЗИН</LinkR></li>
                <li>
                <Link to="ICsale">
                <LinkR to="/">О НАС</LinkR>
                </Link>    
                </li>
                <li>
                <Link to="ICForm">
                <LinkR to="/">КОНТАКТЫ</LinkR>
                </Link>  
                </li>
            </ul>
            <div className="connectStore"> 
            <img src={require("../../img/shoppingcartgrossoutline_87818.svg")} alt="" />
            <i />
            </div>
            </div>
        </nav>
    )
}
}

export default nav;