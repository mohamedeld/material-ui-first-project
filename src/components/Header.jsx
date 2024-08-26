
import PropTypes from 'prop-types';
import logo from "../assets/logo.svg";
import { AppBar, Tab, Tabs, Toolbar, useScrollTrigger } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import React from 'react';
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const useStyles = makeStyles((theme) => ({
  tabContainer:{
    marginLeft:'auto'
  },
  tab:{
   ...theme.typography.tab,
    minWidth:10,
    marginLeft:'25px'
  }
}));

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
const Header = () => {

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const classes=useStyles();
  return (
    <ElevationScroll>
      <AppBar position="fixed">
      <Toolbar disableGutters>
        <img src={logo} style={{width:'20rem'}} alt="logo image" />
        <Tabs aria-label="simple tabs example" className={classes.tabContainer}>
    <Tab className={classes.tab} label="Home" {...a11yProps(0)} />
    <Tab className={classes.tab} label="Services" {...a11yProps(1)} />
    <Tab className={classes.tab} label="The Revolution" {...a11yProps(2)} />
    <Tab className={classes.tab} label="About us" {...a11yProps(3)} />
    <Tab className={classes.tab} label="Contact us" {...a11yProps(4)} />
  </Tabs>
      </Toolbar>
        </AppBar>
        </ElevationScroll>
  )
}

export default Header