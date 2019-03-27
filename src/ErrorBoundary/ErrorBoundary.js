import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  };

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    });
  };

  render() {
    if (this.state.hasError) return <p>{this.state.errorMessage}</p>;
    else return this.props.children;
  }
}

export default ErrorBoundary;
