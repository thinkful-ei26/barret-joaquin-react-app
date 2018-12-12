'use strict';
import React from 'react';

export default function Button(props) {
  return(
  <div>
    <button onClick={e => props.buttonHandler()}>Our first button</button>
  </div>
  )
}
