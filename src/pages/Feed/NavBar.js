import React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 275,
        marginRight: theme.spacing(2),
    },
    button: {
        width: '100%'
    }
}));


const tags = [
    {
        id: 1, name: 'react-js'
    },
    {
        id: 2, name: 'javascript'
    },
    {
        id: 3, name: 'python'
    },
    {
        id: 4, name: 'php'
    },
    {
        id: 5, name: 'C#'
    },
    {
        id: 6, name: 'materialdesign'
    },
]


function Navbar() {

    const classes = useStyles();
    const navigate = useNavigate();
    return (

        <Paper className={classes.root}>
            <Button variant="outlined" color='secondary' className={classes.button} onClick={() => navigate('/sign-up')}>Registri-se Grátis</Button>
            <ListSubheader>{`Tags em Alta`}</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`}></ListItemText>
                    </ListItem>
                ))
            }
            <ListItem button>
                Exibir mais Tags
            </ListItem>
        </Paper>

    )
}

export default Navbar;