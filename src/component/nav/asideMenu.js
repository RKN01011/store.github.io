import React from "react";
import {Link} from "react-router-dom"

function asideMenu () {
    return (
     <aside id="asideMenu" className="close">
     <ul>
        <li><a href="asideMenu#">ГЛАВНАЯ</a></li>
        <li><Link to="/StoreCore">МАГАЗИН</Link></li>
        <li><a href="ICaboutus#">О НАС</a></li>
        <li><a href="ICForm#">КОНТАКТЫ</a></li>
    </ul>
     </aside>
    )
}

export default asideMenu;