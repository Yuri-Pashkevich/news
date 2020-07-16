import React from 'react';
import './Footer.scss';

export const Footer = () => {
    return (
        <div className="footer">
                <img className="footer-earth" src="./svg/footer-earth.png" alt="img"/>
            <div className="footer-text">
                <div className="footer-devtext">Design and development: <span className="footer-dev">Yuri Pashkevich, Belarus</span></div>
                <div className="footer-info">© 2020-2025 World wide. Настоящий ресурс может содержать материалы 18+</div>
            </div>
            <img className="footer-title" src="./svg/footer-logo2.png" alt="img"></img>
        </div>
    )
}