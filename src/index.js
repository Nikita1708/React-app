import React from 'react'
import ReactDOM from 'react-dom'
function FormattedDates(props){
      return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={date:new Date()};

  }
  componentDidMount(){
    this.timerID=setInterval(() => this.tick(),1000);
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({date:new Date()});
  }
  
  render(){
    return(
      <div>
        <h1>Hello world</h1>
        < FormattedDates date={this.state.date} />
      </div>
    );
  }
}

function App(){
  return(
    <div>
      <Clock />
      <Clock />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
