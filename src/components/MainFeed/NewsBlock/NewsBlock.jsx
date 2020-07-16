import React from 'react';
import { SubArticleBlock, MainArticleBlock } from '../../../components';
import './NewsBlock.scss';

export const NewsBlock = ({ data, index1, index2, blocks }) => {
    const newsItems = data.filter((item, index) => index < blocks).map((item, idx) => {
        if (idx === index1 || idx === index2) {
            return (
                <MainArticleBlock
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    rubric={item.rubric}
                    title={item.title}
                />
            )
        } else {
            return (
                <SubArticleBlock
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    rubric={item.rubric}
                    title={item.title}
                    date={item.date}
                />
            )
        }
    })
    return (
        <div className="content-news-wrapper">
            {newsItems}
        </div>
    )
}