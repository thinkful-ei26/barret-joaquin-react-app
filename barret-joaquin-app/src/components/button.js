import React from 'react';

export default function Button(props) {
  return(
  <section>  
    <div>
       <button onClick={e => props.ButtonHandler()}>{props.name}</button>
    </div>
    {/* <div>
     <button id="second-button" onClick={e => props.secondButtonHandler()}>Our second button</button>
    </div> */}
  </section>
  )
}
