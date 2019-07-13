import React, { Component } from 'react'

class Header extends Component{

  handleUserRequest = (event)=>{
    event.preventDefault()
    // this.props.setState({
    // Topic:event.target.topics.value
    // })
    console.log(event.target.topics.value)
  }

  render(){
    return(
      <div>
      <h1>NewsApp</h1>
        <form onSubmit={this.handleUserRequest}>
          <input type="text" placeholder="Search for a Article" name='topics'/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Header
