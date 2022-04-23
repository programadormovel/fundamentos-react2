import React from "react";

export default props => {
    return (
        <div>
            <span>{props.texto}</span>
            <span><strong>{props.numero}</strong></span>
            <span>{props.nerd ? 'Verdadeiro' : 'Falso'}</span>
        </div>
    )
}