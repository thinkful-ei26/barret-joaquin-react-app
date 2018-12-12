import React from 'react';
import Button from './button';
import ButtonOutput from './button-output';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstButtonClicked: false,
      secondButtonClicked:false
    };
  }

  handleFirstButtonClicked() {
    this.setState({ firstButtonClicked: !this.state.firstButtonClicked });
    // console.log('button 1 clicked');
    // console.log('parent heard the click');
  }

   handleSecondButtonClicked() {
    this.setState({ secondButtonClicked: !this.state.secondButtonClicked });
    // console.log(this.state.buttonClicked);
    // console.log('2nd button click');
  }

  render() {
    if (this.state.firstButtonClicked) {
      return (
        <div>
            <Button 
                name={'Button 1'}
                ButtonHandler={e => this.handleFirstButtonClicked()}
             />
            <ButtonOutput />
            <Button
                name={'Button 2'} 
                ButtonHandler={e => this.handleSecondButtonClicked()} />
        </div>
      )
    }
    else if (this.state.secondButtonClicked) {
        return (
        <section>
            <Button
                name={'Button 1'}
                ButtonHandler={e => this.handleFirstButtonClicked()}
            />
            <Button 
                name={'Button 2'}
                ButtonHandler={e => this.handleSecondButtonClicked()} />
            <ButtonOutput />
        </section>
        )
        
    }
    
    else {
        
      return(
        <section>
            <Button 
                name={'Button 1'}
                ButtonHandler={e => this.handleFirstButtonClicked()} 
            />
            <Button 
                name={'Button 2'}
                ButtonHandler={e => this.handleSecondButtonClicked()} 
            />
        </section> 
      ) 
        
    }
  }
}
