import React, { Component } from 'react';
import './App.css';
import Article from './components/Article'
import Header from './components/Header'


const Api_Key = INSERT_YOUR_ACCESS_KEY;


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      Topic:'Sports',
      data: {}
    }
  }


  getNews = (event)=>{
  const url = `https://newsapi.org/v2/everything?q=${this.state.Topic}&apiKey=${Api_Key}`
  fetch(url)
    .then(response => response.json())
    .then(data => {

      this.setState({
        data: data
      })
        console.log(data);
    })
}
componentDidMount(){
  this.getNews()
}

  render() {
    return (
      <div className="App">
        <Header title={this.handleUserRequest}/>
        <Article data={this.state.data}/>
      </div>
    );
  }
}

export default App;
