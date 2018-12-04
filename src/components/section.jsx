import React from 'react';

import "./style.css";

const Item = (props) => {
    return (<p><a href={props.adress} target="_blank">{props.name}</a></p>);
}

const Section = (props) => {
    return (
        <section className="section">
            <h1 className="list">{props.elem.name}</h1>
            <div className="list-item">
                {
                    props.list
                        .filter(elem => elem.field === props.elem.id)
                        .map(elem => Item(elem))
                }
            </div>
        </section>
    )
}

export default Section;