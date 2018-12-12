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
    console.log(this.state.firstButtonClicked);
    // console.log('parent heard the click');
  }

   handleSecondButtonClicked() {
    this.setState({ secondButtonClicked: !this.state.secondButtonClicked });
    // console.log(this.state.buttonClicked);
    // console.log('parent heard the click');
  }

  render() {
    if (this.state.firstButtonClicked||this.state.secondButtonClicked) {
      return (
        <div>
          <Button id='first-button' firstButtonHandler={e => this.handleFirstButtonClicked()} />
            <Button id='second-button' secondButtonHandler={e => this.handleButtonClicked()} />
          <ButtonOutput />
        </div>
      );
    } else {
        
      return <Button 
      secondButtonHandler={e => this.handleSecondButtonClicked()}
      firstButtonHandler={e => this.handleFirstButtonClicked()} />;
    }
  }
}
