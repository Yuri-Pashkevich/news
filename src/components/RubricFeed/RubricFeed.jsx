import React from 'react';
import './RubricFeed.scss'
import { NavLink } from 'react-router-dom'
import { Dates } from '../../components';

export const RubricFeed = ({ data }) => {
    const dataItems = data.map(item => {
        let cuttedText = `${item.text.substring(0, 200)}...`;
        return (
            <NavLink className="content-feed-link" exact to={`/${item.rubric}/${item.id}`} key={item.id}>
                <div className="content-feed-wrapper">
                    <div className="content-feed-rubric">{item.rubric}</div>
                    <h3 className="content-feed-title">{item.title}</h3>
                    <p className="content-feed-text">{item.text.length > 200 ? cuttedText : item.text}</p>
                    <Dates date={item.date} className="content-feed-data"/>
                </div>
                <div className="content-feed_image-wrapper">
                    <img className="content-feed-image" src={item.image} alt="img"></img>
                </div>
            </NavLink>
        )
    });
    return (
        <div className="rubric-feed-wrapper">
            {dataItems}
        </div>
    )
}

