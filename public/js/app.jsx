import React from 'react';
import Message from './helloworld.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'hogehoge san',
      age: 28
    }
  }
  handleChange(e) {
    this.setState({
        name: e.target.value,
        age: this.state.age
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.handleChange} />
        <Message name={this.state.name} age={this.state.age} />
      </div>
    );
  }
};

React.render(
  <App />,
  document.getElementById('container')
);
