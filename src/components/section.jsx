import React, { createElement } from 'react';
import "../style.css";

const Item = (props) => {
    return (<p><a href={props.adress} target="_blank" rel="noopener noreferrer">{props.name}</a></p>);
}

const Section = (props) => {
    const items = props.list
        .map(elem => createElement(Item, { ...elem, key: elem.id }));
    // console.log(items.length, props.elem.name); 
    if (items.length < 1) return null;
    return (
        <section className="section">
            <h1 className="list">
                {
                    props.category
                }
            </h1>
            <div className="list-item">
                {
                    items
                }
            </div>

        </section>
    )
}


export default Section;