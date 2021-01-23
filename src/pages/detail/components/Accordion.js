import React from 'react'

export default function Accordion({ index, title, content }) {
    return (
        <div className="accordion">
            <div className="accordion__title">
                <div className="date">Ngày {index}</div>
                <h3>{title}</h3>
            </div>
            <div className="content">{content}</div>
        </div>
    )
}
