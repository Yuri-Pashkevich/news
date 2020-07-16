import React from 'react'

export const Dates = ({ date, className }) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    const formattedDate = new Date(date).toLocaleString('ru', options).split(' ');
    formattedDate.splice(3, 1, 'в');
    const newDate = formattedDate.join(' ');
    return <span className={className}>{newDate}</span>
}