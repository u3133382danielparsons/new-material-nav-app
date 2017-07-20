import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectName } from '../actions/index'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List, ListItem} from 'material-ui/List'
//import Subheader from 'material-ui/Subheader'
import ActionInfo from 'material-ui/svg-icons/action/info'
import Avatar from 'material-ui/Avatar'


class NamesList extends Component {

  createListItems(){
      return this.props.names.map((name) => {
        return (

          <ListItem
            onClick={() => this.props.selectName(name)}
            key={name.id}
            primaryText={<h3>{name.first} {name.last}</h3>}
            secondaryText={<p>{name.description}</p>}
            leftAvatar={<Avatar src={name.thumbnail} />}
            rightIcon={<ActionInfo />}
          />
        )
      })
  }
  render(){
    return(
      <MuiThemeProvider>
        <List>
          {this.createListItems()}
        </List>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps(state){
  return {
    names: state.names
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectName: selectName}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(NamesList)
