import React from 'react';
import Button from './button';
import ButtonOutput from './button-output';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false
    };
  }

  handleButtonClicked() {
    this.setState({ buttonClicked: !this.state.buttonClicked });
    console.log(this.state.buttonClicked);
    // console.log('parent heard the click');
  }

  render() {
    if (this.state.buttonClicked) {
      return (
        <div>
          <Button buttonHandler={e => this.handleButtonClicked()} />
          <ButtonOutput />
        </div>
      );
    } else {
      return <Button buttonHandler={e => this.handleButtonClicked()} />;
    }
  }
}
