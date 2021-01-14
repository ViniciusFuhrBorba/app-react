import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

// import { usePost } from '../../../../context/PostContext';


const useStyles = makeStyles((theme) => ({
    root: {
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center'
    }
}));


function BottomBar() {

    const classes = useStyles();
    // const ctx = usePost();

    // const handleSaveDraft = () => {

    // }

    // const handlePublish = () => {

    // }

    return (
        <AppBar position='fixed' color='inherit' className={classes.appBar}>
            <Toolbar>
                <Button style={{ background: 'green', color: '#FFFF', marginRight: '5px' }} variant='contained'>Salvar Rascunho</Button>
                <Button style={{ background: 'red', color: '#FFFF' }} variant='contained'>Publicar</Button>
            </Toolbar>
        </AppBar>
    )
}

export default BottomBar;