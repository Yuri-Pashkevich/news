import React from 'react';
import './SubArticleBlock.scss';
import { NavLink } from 'react-router-dom';
import { Dates } from '../../Dates/Dates.jsx'

export const SubArticleBlock = ({ id, image, rubric, title, date }) => {
    return (
        <NavLink className="content-sub-link" to={`/${rubric}/${id}`}>
            <div className="content-image-wrapper">
                <img className="content-sub-image" src={image} alt="img"></img>
            </div>
            <div className="content-text-wrapper">
                <div className="content-sub-rubric">{rubric}</div>
                <h3 className="content-sub-title">{title}</h3>
                <Dates date={date} className="content-sub-date"/>
            </div>
        </NavLink>
    )
}

