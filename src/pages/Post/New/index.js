import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import { useSelector } from 'react-redux';
import MarkDown from 'react-markdown';

import PostEditor from './Editor';

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
    },
    image: {
        height: 100
    },
    imagePreview: {
        width: '100%',
        height: 200
    },
    textArea: {
        width: '100%',
        height: '100%',
        resize: 'none',
        border: 'none',
        outline: 'none',
        fontSize: 15,
    }, avatar: {
        marginRight: theme.spacing(1),
    }
}));



function NewPost() {

    const classes = useStyles();
    const [image, setImage] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [tags, setTags] = useState([{ title: 'react.js' }]);
    const [markdownText, setMarkdownText] = useState('');
    const account = useSelector(state => state.account)


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
                height='calc(100% - 70px)'
                overflow='scrow'>
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
                    {image && (
                        <Box mb={2}>
                            <img className={classes.imagePreview} src={image} alt='background' />
                        </Box>
                    )}
                    <Box mb={2}>
                        <Typography variant='h3'>
                            {titulo}
                        </Typography>
                    </Box>
                    <Box display='flex' alignItems='center' mb={2}>
                        <Box>
                            <Avatar className={classes.avatar} src={account.user?.avatar} />
                        </Box>
                        <Box>
                            <Typography variant='body1'>{account.user?.name}</Typography>
                            <Typography variant='body2' color='textSecondary'>2 dias atrás</Typography>
                        </Box>
                    </Box>
                    <Box mb={2}>
                        <Typography variant='body1'>
                            {tags.map(item => item.title).join(',')}
                        </Typography>
                    </Box>
                    <Divider />
                    <MarkDown source={markdownText} />
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