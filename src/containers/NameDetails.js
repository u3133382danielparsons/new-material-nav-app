import React, { Component } from 'react'
import { connect } from 'react-redux'

class NameDetails extends Component {
  render(){
    if(!this.props.name){
      return (<h2>Select an Organisation Above!</h2>)
    }
    return(
      <div>
        <img src={this.props.name.thumbnail} alt="a name"/>
        <h2>{this.props.name.first} {this.props.name.last}</h2>
        <p>Description: {this.props.name.description}</p>
        <p><a href={this.props.name.url}>Click Here:</a></p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    name: state.activeName
  }
}

export default connect(mapStateToProps)(NameDetails)
