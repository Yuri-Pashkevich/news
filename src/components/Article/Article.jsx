import React from 'react';
import './Article.scss';
import { Dates, ReadAlso } from '../../components';

export const Article = ({ rubric, title, date, image, text, allData }) => {
    return (
        <div className="article-content-wrapper">
            <div className="article-wrapper">
                <div className="article-border">
                    <div className="article-padding">
                        <h2 className="article-title">{title}</h2>
                        <div className="article-subwrapper">
                            <div className="article-rubric">{rubric}</div>
                            <Dates date={date} className="article-date" />
                        </div>
                    </div>
                    <img className="article-image" src={image} alt="img"></img>
                </div>
                <div className="text-wrapper">
                    <p className="article-text">{text}</p>
                </div>
            </div>
            <ReadAlso data={allData}/>
        </div>
    )
}
