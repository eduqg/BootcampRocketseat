import React from 'react';

import facebug from '../../assets/facebug.png';
import person from '../../assets/personwhite.png';

import './index.css';

export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content" >
                <img src={facebug} alt="facebug" id="facebug" />
                <div>
                    <p className="myprofiletext">Meu Perfil</p>
                    <img src={person} alt="perfil" id="person" />
                </div>
            </div>
        </header>
    );
}
