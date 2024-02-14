import React, { Children } from 'react';
// import '../assets/styles/Form.css';

import LogoImg from '../assets/img/logo.png';

export default function Form({ title, subtitle, children }) {
    return (
        <div className="login-layout">
            <div className="login-inner">
                <div className="logo-img">
                    <img src={LogoImg}></img>
                </div>

                <div className="title-box">
                    <h3 className="main-title">{title}</h3>
                    <p className="sub-title">{subtitle}</p>
                </div>

                <div className="content">{children}</div>
            </div>
        </div>
    );
}
