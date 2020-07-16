import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './ReadAlso.scss'

export const ReadAlso = ({ data }) => {

    const [randomArticles, setRandomArticles] = useState(null);

    useEffect(() => {
        const result = [];
        let i = data.length, j, temp;
        // Shuffle data array
        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
        data.map((item, index) => index < 5 ? result.push(item) : null)
        setRandomArticles(result)
    }, [data])

    const columnFeed = randomArticles && randomArticles.map((item, index) => {
        return (
            <NavLink className="article-column-wrapper" to={`/${item.rubric}/${item.id}`} key={index}>
                <img src={item.image} alt="img" />
                <h3 className="column-title">{item.title}</h3>
            </NavLink>
        )
    })
    return (
        <div className="read-column-wrapper">
            <div className="read-also">Читайте также</div>
            <div className="articles-wrapper">
                {columnFeed}
            </div> 
        </div>
    )
}
