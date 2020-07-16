import React from 'react';
import './MainArticleBlock.scss';
import { NavLink } from 'react-router-dom'

export const MainArticleBlock = ({ rubric, id, image, title }) => {
    return (
        <NavLink className="content-link" to={`/${rubric}/${id}`}>
            <img className="content-image" src={image} alt="img"></img>
            <div className="content-rubric">{rubric}</div>
            <h2 className="content-title">{title}</h2>
        </NavLink>
    )
}