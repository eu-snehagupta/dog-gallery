import React from "react";

export default function Cards(props) {

    const {title, description} = props;

    return(
        <article className= "card">
            <h2>Picture {title}</h2>
            <p> {description}
            </p>
        </article>
    )
}