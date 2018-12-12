import React from 'react';

export default function ButtonOutput(props) {
    return(
        <div className="button-output">
            <span>{props.message}</span>
        </div>
    )
}