import React, { Component } from 'react';

import './App.css';
import Person  from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {name : "saadat"}
    ]
  }

  changeNameHandler = (name)=>{
    this.setState({
      persons : [
        {name : name}
      ]
    });
  }
    
  inputNameHandler = (event) => {
   
    this.setState({
      persons : [
        {name : event.target.value}
      ]
    });
  }

  render() {
    return (
      <div>
        {/* React.createElement('h1',{className:'test'},"This is a heading.") */}
        <Person name= {this.state.persons[0].name} 
            click ={this.changeNameHandler.bind(this,"Goku")}
            changed = {this.inputNameHandler} >
          How are you?
        </Person>
        
        <button onClick={this.changeNameHandler}>Change Name</button>
      </div>
    );
  }
}

export default App;
