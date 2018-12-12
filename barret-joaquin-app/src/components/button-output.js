import React from 'react';

export default function ButtonOutput(props) {
    return(
          <div className="button-output">
        <ul>
          {props.imgLi}
          {props.linkLi}
					{props.inputLi}
					{props.children}
        </ul>
    </div>
    )
}