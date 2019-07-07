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
import { ThemeContext } from "./contexts/ThemeContext";
import { withLanguageContext } from "./contexts/LanguageContext";
import content from "./lib/translations";

class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    const { classes, languageContext } = this.props;
    const { isDarkMode, toggleTheme } = this.context;
    const { search, flag } = content[languageContext.language];
    return (
      <nav className={classes.root}>
        <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span role="img" aria-label="French Flag Emoji">
                {flag}
              </span>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              App Title
            </Typography>
            <Switch onChange={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
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

export default withLanguageContext(withStyles(styles)(Navbar));