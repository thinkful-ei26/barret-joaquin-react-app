import React from 'react';

export default function Button(props) {
  return(
  <section>  
    <div>
       <button id="first-button" onClick={e => props.firstButtonHandler()}>Our first button</button>
    </div>
    <div>
     <button id="second-button"onClick={e => props.secondButtonHandler()}>Our second button</button>
    </div>
  </section>
  )
}
