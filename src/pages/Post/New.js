import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'red',
        height: 'calc(100% - 70px)',
        overflow: 'scrow'
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center'
    },
    button: {
        marginRight: theme.spacing(2)
    }
}));


function NewPost() {

    const classes = useStyles();

    return (
        <>
            <Box display='flex'
                height='calc(100% - 70px)'
                overflow='scrow'>
                <Box width='50%' height='100%'>
                    Editor
                </Box>
                <Box width='50%' height='100%'>
                    Resultado
                </Box>
            </Box>
            <AppBar position='fixed' color='inherit' className={classes.appBar}>
                <Toolbar>
                    <Button className={classes.button}>Salvar Rascunho</Button>
                    <Button color='secondary' variant='outlined'>Publicar</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}


export default NewPost;