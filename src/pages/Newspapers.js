import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'

export default class Newspapers extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false}
  }
  handleToggle = () => this.setState({open: !this.state.open})
  handleClose = () => this.setState({open: false})

  render() {
    const styles = {
        appBar: {
        background: '#000000',
      }
    }
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            style={styles.appBar}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onTouchTap={this.handleToggle}
            title="Family History App"
          />
        </MuiThemeProvider>

        <MuiThemeProvider>
            <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
              <MenuItem onTouchTap={this.handleClose}><Link to="/" >Home</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/pages/Newspapers" >Newspapers</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/pages/Names" >Names</Link></MenuItem>
            </Drawer>
        </MuiThemeProvider>
        <div className="container">
          <div className="jumbotron">
            <h1>Newspapers</h1>
            <h2>This is the Newspapers page!</h2>
          </div>
        </div>
      </div>
    )
  }
}
