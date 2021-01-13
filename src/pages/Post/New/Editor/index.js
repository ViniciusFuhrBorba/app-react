import React, { useCallback } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useDropzone } from 'react-dropzone';

import { usePost } from '../../../../context/PostContext';

import Title from './Title';

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(2)
    },
    imagem: {
        height: 100
    },
    textArea: {
        width: '100%',
        height: '100%',
        resize: 'none',
        border: 'none',
        outline: 'none',
        fontSize: 15,
    }
}));
const arrayTags = [

    {
        title: 'react.js'
    },
    {
        title: 'node.js'
    },
    {
        title: 'vue.js'
    },
    {
        title: 'webdev'
    },
]

function PostEditor() {

    const classes = useStyles();

    const ctx = usePost();

    const { 
        image,
        setImage,
        tags,
        setTags,
        markdownText,
        setMarkdownText } = ctx

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const base64data = reader.result;
            setImage(base64data);
        }
    }, [setImage])
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
        accept: 'image/*'
    })
    return (
        <>
            <Box {...getRootProps()} mb={2}>
                <input {...getInputProps()} />
                <Button color='primary' variant='contained'>Carregar Imagem</Button>
            </Box>
            {ctx.image && (
                <Box mb={2}>
                    <img className={classes.imagem} src={image} alt='background' />
                </Box>
            )}
            <Box mb={2}>
                <Title />
            </Box>
            <Box mb={2}>
                <Autocomplete
                    multiple
                    id="tags-standard"
                    options={arrayTags}
                    getOptionLabel={(option) => option.title}
                    value={tags}
                    onChange={setTags}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            placeholder="Tags"
                        />
                    )}
                />
            </Box>
            <textarea className={classes.textArea} onChange={setMarkdownText} value={markdownText}></textarea>
        </>
    )
}

export default PostEditor;