import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectUser } from '../actions/index'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import ActionInfo from 'material-ui/svg-icons/action/info'
import Avatar from 'material-ui/Avatar'


class UserList extends Component {

  createListItems(){
      return this.props.users.map((user) => {
        return (

          <ListItem
            onClick={() => this.props.selectUser(user)}
            key={user.id}
            primaryText={<h3>{user.first} {user.last}</h3>}
            secondaryText={<p>{user.id}</p>}
            leftAvatar={<Avatar src={user.thumbnail} />}
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
    users: state.users
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(UserList)
