import React from 'react';
import Button from './button';
import ButtonOutput from './button-output';

export default class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buttonClicked: false
        }
    }

    handleButtonClicked(){
        console.log('parent heard the click');
    }

    render(){
        return (
            <div>
             <Button buttonHandler={e =>this.handleButtonClicked()}/>
             <ButtonOutput />
            </div>
    
        )
    }
    

}
