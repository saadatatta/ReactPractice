import React,{Component} from "react";
import Radium from "radium";

class Person extends Component {
  render(){
    return (
      <div>
        <i onClick={this.props.click}>This is {this.props.name}.</i>
        <i>{this.props.children}</i>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
  
};

export default Radium(Person);
