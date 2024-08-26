import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../assets/logo.svg";
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
  },
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
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const classes = useStyles();
  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <img src={logo} style={{ width: "20rem" }} alt="logo image" />
          <Tabs
            aria-label="simple tabs example"
            value={value}
            onChange={handleChange}
            className={classes.tabContainer}
          >
            <Tab
              className={classes.tab}
              component={Link}
              to="/"
              label="Home"
              {...a11yProps(0)}
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/services"
              label="Services"
              {...a11yProps(1)}
              aria-owns={anchorEl ? 'simple-menu':undefined}
              aria-haspopup={anchorEl?'true':undefined}
              onMouseOver={(event)=> handleClick(event)}
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/revolution"
              label="The Revolution"
              {...a11yProps(2)}
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/about"
              label="About us"
              {...a11yProps(3)}
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="contact"
              label="Contact us"
              {...a11yProps(4)}
            />
          </Tabs>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Free Estimate
          </Button>
          <Menu id="simple-menu" open={open} onClose={handleClose} anchorEl={anchorEl} MenuListProps={{
            onMouseLeave:handleClose
          }}>
            <MenuItem onClick={handleClose} component={Link} to="/customsoftware">Custom Software Development</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/mobile">Mobile App Development</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/web">Website Development</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
