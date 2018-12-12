import React from 'react';
import Button from './button';
import ButtonOutput from './button-output';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstButtonClicked: false,
      secondButtonClicked:false,
      firstNestedButtonClicked: false
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

  handleNestedButtonClicked() {
    this.setState({ firstNestedButtonClicked: !this.state.firstNestedButtonClicked });
    // console.log(this.state.buttonClicked);
    // console.log('nested button click');
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
                imgLi={<li><img src='http://lorempixel.com/400/200/'/>this is where the image goes</li>}
                inputLi={<li><input/>This is the input field</li>} 
                >
                    <Button name={'Nested Button'}
                    ButtonHandler={e => this.handleNestedButtonClicked()}
                    >
                        {/* <ButtonOutput>
                            <p>Hello from A heavily nested scramble</p>
                        </ButtonOutput> */} 
                    </ Button>
            </ButtonOutput>
               
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
                imgLi={<li><img alt="" src='http://lorempixel.com/400/200/'/>this is where the image goes</li>}
                inputLi={<li><input/>This is the input field</li>} 
                nestedButton={<Button 
                    name={'Button of Button 1'}
                    />}
                >
                <Button name={'Nested Button'}
                    ButtonHandler={e => this.handleNestedButtonClicked()}
                    />
            </ ButtonOutput>
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
                 linkLi={<li><a href='https://reddit.com'>This is the link</a></li>}
                  />
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
