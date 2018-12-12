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
    if(this.state.firstButtonClicked && this.state.secondButtonClicked){
return(
        <div>
            <Button 
                name={'Button 1'}
                ButtonHandler={e => this.handleFirstButtonClicked()}
             />
            <ButtonOutput 
                imgLi={<li><img src=''/>this is where the image goes</li>}
                inputLi={<li><input/>This is the input field</li>} />
               
            <Button
                name={'Button 2'} 
                ButtonHandler={e => this.handleSecondButtonClicked()} />
            <ButtonOutput
                 linkLi={<li><a href='https://reddit.com'>This is the link</a></li>}
                  />
        </div>
)

    }
    if (this.state.firstButtonClicked) {
      return (
        <div>
            <Button 
                name={'Button 1'}
                ButtonHandler={e => this.handleFirstButtonClicked()}
             />
            <ButtonOutput 
            message={'Message for button 1'} />
            <Button
                name={'Button 2'} 
                ButtonHandler={e => this.handleSecondButtonClicked()} />
        </div>
      )
    }
     if (this.state.secondButtonClicked) {
        return (
        <section>
            <Button
                name={'Button 1'}
                ButtonHandler={e => this.handleFirstButtonClicked()}
            />
            <Button 
                name={'Button 2'}
                ButtonHandler={e => this.handleSecondButtonClicked()} />
            <ButtonOutput
              message={'Message for button 2'} />
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
