import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';
import AppBarNavDropDown from './AppBarNavDropDown';
import img from '../assets/IDLogo.png'

function handleClick() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const appBarStyle = {
  height:"7vh",
  textAligh: "center", 
  position: "fixed",
  top: "0",
  left: "0",


}

const appBarImgStyle = {
    height:"5vh",
    width:"5vh",
    position: "fixed",
    right: '50%',
    top: '.5vh'
}

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
export default class AppBarNav extends Component {
    constructor(props) {
      super(props)
      this.state = { isMenuOpen: false }
    }

  render() {

      const isMenuOpen = this.state.isMenuOpen

    return (
        <div>
          {isMenuOpen ? (
            
            <div><AppBar
            style={appBarStyle}
            onTitleClick={handleClick}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            onLeftIconButtonClick={() => this.closeMenu()}
            iconElementRight={<FlatButton label="Save" />}
            
            ><img src={img} alt='' style={appBarImgStyle} /></AppBar>
          <AppBarNavDropDown /></div>
          ) : (
            <AppBar
            
            title={<span style={styles.title}>Closed</span>}
            onTitleClick={handleClick}
            onLeftIconButtonClick={() => this.openMenu()}
            iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
            iconElementRight={<FlatButton label="Save" />}
            style={appBarStyle}
            ><img src={img} alt='' style={appBarImgStyle} /></AppBar>
          )}
        </div>
      
      
      
    )
  }

  openMenu() {
    this.setState({ isMenuOpen: true })
  }

  closeMenu() {
    this.setState({ isMenuOpen: false })
  }

}