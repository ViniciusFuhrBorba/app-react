import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Settings from './Settings';

import Account from './Account';
import Notifications from './Notifications';
import WritePost from './WritePost';

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    grow: {
        flexGrow: 1
    },
    userSection: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        marginRight: 10
    },
    img: {
        maxHeight: 55,
    }
});

function Header() {

    const classes = useStyles();
    const theme = useTheme();
    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <Link to="/">
                    <img
                        src={
                            theme.darkMode ? '/images/logo-branca.png' : '/images/logo.png'
                        }
                        alt="logo"
                        className={classes.img}
                    />
                </Link>
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <WritePost></WritePost>
                    <Box ml={2}>
                        <Notifications></Notifications>
                    </Box>
                    <Box ml={2}>
                        <Settings />
                    </Box>
                    <Box ml={2}>
                        <Account></Account>
                    </Box>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;