import React from 'react';
import { SubArticleBlock, MainArticleBlock } from '../../../components';
import './MainBlock.scss';

export const MainBlock = ({ art1, art2, art3 }) => {
    return art1 && art1 && art3 ? (
        <div className="content-main-wrapper">
            <MainArticleBlock
                id={art1.id}
                image={art1.image}
                rubric={art1.rubric}
                title={art1.title}
            />
            <div className="content-sub-wrapper">
                <SubArticleBlock
                    id={art2.id}
                    image={art2.image}
                    rubric={art2.rubric}
                    title={art2.title}
                    date={art2.date}
                />
                <SubArticleBlock
                    id={art3.id}
                    image={art3.image}
                    rubric={art3.rubric}
                    title={art3.title}
                    date={art3.date}
                />
            </div>
        </div>
    ) : null
}