import React from 'react';
import './Menu.scss';
import { NavLink } from 'react-router-dom'
import './BurgerMenu.scss'

export const Menu = ({ menutype }) => {
    const menuItems = [
        { content: "feed", url: "/", img: "./svg/newspaper-solid.svg" },
        { content: "games", url: "/games", img: "./svg/gamepad-solid.svg" },
        { content: "hobby", url: "/hobby", img: "./svg/palette-solid.svg" },
        { content: "politics", url: "/politics", img: "./svg/handshake-solid.svg" },
        { content: "sports", url: "/sports", img: "./svg/futbol-regular.svg" },
        { content: "advertising", url: "/advertising", img: "./svg/comments-dollar-solid.svg" },
    ];
    const menu = menuItems.map(menuItem => {
        return (
            <li className={`${menutype}-item`} key={menuItem.url}>
                <NavLink className={`${menutype}-link`} exact to={menuItem.url}>
                    <img className={`${menutype}-icon`} src={menuItem.img} alt="img" />
                    <div>{menuItem.content}</div>
                </NavLink>
            </li>
        )
    });
    return (
        <nav className={`${menutype}-navigation`}>
            <ul className={menutype}>
                {menu}
            </ul>
        </nav>
    )
}
