import { AppBar, Toolbar, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import React from 'react';

const NavBar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button component={NavLink} to="/" style={{ flexGrow: 1, textDecoration: 'none', color: '#fff' }}>
                    <h1>My Website</h1>
                </Button>
                <Button color="inherit" component={NavLink} to="/" exact activeClassName="active">
                    Home
                </Button>
                <Button color="inherit" component={NavLink} to="/about" activeClassName="active">
                    About Us
                </Button>
                <Button color="inherit" component={NavLink} to="/contacts" activeClassName="active">
                    Contacts
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;