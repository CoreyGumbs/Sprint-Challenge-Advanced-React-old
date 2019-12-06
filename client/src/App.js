import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      this.setState({data: res.data});
    })
    .catch(err => console.log(err));
  }
  
  render(){
    console.log(this.state.data);
    return(
      <div>
        my App
      </div>
    )
  }
}

export default App;
