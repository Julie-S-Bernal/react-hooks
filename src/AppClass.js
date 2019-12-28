import React, { Component } from 'react';

class App extends Component {

  state = {
    count: 0,
    isOn: false
  }

  //  USE STATE
  // incrementCount = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }

  // USE PREVIOUS STATE
  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  }

render() {
  console.log(this.state.count)
  return (
    // New way to writte fragmemts
    <>
    <h2>Counter</h2>
    <button onClick={this.incrementCount}>
      I was clicked {this.state.count} times
    </button>
    <h2>Toggle Light</h2>
    <div
      style={{
        height:'50px',
        width: '50px',
        background: this.state.isOn ? 'green' : 'grey'
      }}
      onClick={this.toggleLight}
    />
    </>
   )
  }
}

export default App;
