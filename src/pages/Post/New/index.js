import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import PostEditor from './Editor';
import PostPreview from './Preview';
import PostProvider from '../../../context/PostContext';


const useStyles = makeStyles((theme) => ({
    root: {
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center'
    }
}));

function NewPost() {

    const classes = useStyles();

    return (
        <>
            <PostProvider>
                <Box display='flex'
                    height='calc(100% - 90px)'
                    overflow='scrow'
                    className={classes.root}>
                    <Box width='50%' height='100%' padding={2} borderRight='1px solid #ddd'>
                        <PostEditor />
                    </Box>
                    <Box width='50%' height='100%' padding={2}>
                        <PostPreview />
                    </Box>
                </Box>
                <AppBar position='fixed' color='inherit' className={classes.appBar}>
                    <Toolbar>
                        <Button style={{ background: 'green', color: '#FFFF', marginRight: '5px' }} variant='contained'>Salvar Rascunho</Button>
                        <Button style={{ background: 'red', color: '#FFFF' }} variant='contained'>Publicar</Button>
                    </Toolbar>
                </AppBar>
            </PostProvider>
        </>
    )
}


export default NewPost;