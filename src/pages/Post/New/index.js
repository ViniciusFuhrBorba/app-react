import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import PostEditor from './Editor';
import PostPreview from './Preview';

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
    const [image, setImage] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [tags, setTags] = useState([{ title: 'react.js' }]);
    const [markdownText, setMarkdownText] = useState('');


    const handleTitleChange = (event) => {
        setTitulo(event.currentTarget.value);
    }
    const handleTagsChange = (event, values) => {
        setTags(values);
    }
    const handleMarkdownChange = (event) => {
        setMarkdownText(event.currentTarget.value)
    }
    return (
        <>
            <Box display='flex'
                height='calc(100% - 90px)'
                overflow='scrow'
                className={classes.root}>
                <Box width='50%' height='100%' padding={2} borderRight='1px solid #ddd'>
                    <PostEditor
                        image={image}
                        setImage={setImage}
                        titulo={titulo}
                        setTitulo={handleTitleChange}
                        tags={tags}
                        setTags={handleTagsChange}
                        markdownText={markdownText}
                        setMarkdownText={handleMarkdownChange}
                    />
                </Box>
                <Box width='50%' height='100%' padding={2}>
                    <PostPreview
                        image={image}
                        titulo={titulo}
                        tags={tags}
                        markdownText={markdownText}
                    />
                </Box>
            </Box>
            <AppBar position='fixed' color='inherit' className={classes.appBar}>
                <Toolbar>
                    <Button style={{ background: 'green', color: '#FFFF', marginRight: '5px' }} variant='contained'>Salvar Rascunho</Button>
                    <Button style={{ background: 'red', color: '#FFFF' }} variant='contained'>Publicar</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}


export default NewPost;