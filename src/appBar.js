import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class DPAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  loginMenu() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div>
        <IconButton
          aria-owns={open ? "menu-appbar" : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
        </Menu>
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    const { auth } = this.state;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              aria-owns={open ? "menu-main" : null}
              className={classes.menuButton}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-main"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Importar</MenuItem>
              <MenuItem onClick={this.handleClose}>Pontos</MenuItem>
              <MenuItem onClick={this.handleClose}>Funcionários</MenuItem>
              <MenuItem onClick={this.handleClose}>Carga horária</MenuItem>
              <MenuItem onClick={this.handleClose}>Relatórios</MenuItem>
            </Menu>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Direto ao Ponto
            </Typography>
            {auth && this.loginMenu()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

DPAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DPAppBar);
