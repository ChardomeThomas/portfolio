import React from 'react';
import "./accueil.css";
import first from "../../images/first.png";
import second from "../../images/second.png";
import third from "../../images/third.png";
import fourth from "../../images/fourth.png";
import thom from "../../images/THOM.png";

import { Link } from 'react-router-dom';

export default function accueil() {
    return (
        <div class="container">
            <div class="line-container">
                <div class="line small"></div>
                <div class="line texte"><Link to="/aPropos">A PROPOS</Link></div>
                <div class="line texte"><Link to="/monCv">MON CV</Link></div>
                <div class="line texte"><Link to="/">PROJETS</Link></div>
                <div class="line texte"><Link classname="test" to="/Contact">CONTACT</Link></div>
                <div class="line small"></div>
            </div>

            <img class="first" src={first} alt="premier plan" />
            <img class="second" src={second} alt="premier plan" />
            <img class="third" src={third} alt="premier plan" />
            <img class="fourth" src={fourth} alt="premier plan" />
            <img class="thom" src={thom} alt="nom" />
        </div>
    )
}
