import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log('Intervalo limpo!');
  }

  render() {
    return <p>Tempo: {this.state.time}s</p>;
  }
}

export default Timer;
