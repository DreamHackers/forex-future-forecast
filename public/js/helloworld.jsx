import React from 'react';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p>
        hello, {this.props.name} , {this.props.age} years old!
      </p>
    );
  }
}
