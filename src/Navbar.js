import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./styles/NavbarStyles";
// import { Input } from "@material-ui/core";

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <nav className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span role="img" aria-label="French Flag Emoji">
                🇫🇷
              </span>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              App Title
            </Typography>
            <Switch />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
