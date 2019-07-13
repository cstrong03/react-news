import React, { Component } from 'react'

class Article extends Component{
  render(){
    console.log(this.props.data)
    // let map = (this.props.data.articles[0].title ? this.props.data.articles.map((article) => (
    //   <h1>{article.title}</h1>
    //  )) : null)
    let map = (this.props.data.articles && this.props.data.articles.map((article) => (
      <div>
      <img src={article.urlToImage} alt="image2"/>
      <h1>{article.title}</h1>
      <p>{article.description}</p>

      </div>
    )))
    return(
      <div>
      {map}
      </div>
    )
  }
}

export default Article
