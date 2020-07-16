import React from 'react';
import './ColumnFeed.scss';
import { NavLink } from 'react-router-dom';
import { Dates } from '../../../components';

export const ColumnFeed = ({ data }) => {
    const columnFeed = data.filter((item, index) => index < 15).map(item => (
        <div className="column-news-wrapper" key={item.id}>
            <NavLink className="column-news-link" to={`/${item.rubric}/${item.id}`}>
                <Dates className="column-news-date" date={item.date} />
                <p className="column-news-title">{item.title}</p>
            </NavLink>
        </div>
    ))
    return (
        <div className="column-feed-wrapper">
            <div className="column-feed-news">Лента новостей</div>
            {columnFeed}
        </div>
    )
}