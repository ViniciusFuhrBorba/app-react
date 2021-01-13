import React, { useCallback } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useDropzone } from 'react-dropzone';

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(2)
    },
    image: {
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

function PostEditor({ image, setImage, titulo, setTitulo, tags, setTags, markdownText, setMarkdownText }) {

    const classes = useStyles();

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
                <Button>Carregar Imagem</Button>
            </Box>
            {image && (

                <img className={classes.image} src={image} alt='background' />

            )}
            <TextField id='title' placeholder='Título' fullWidth value={titulo} onChange={setTitulo}></TextField>
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
            <textarea className={classes.textArea} onChange={setMarkdownText} value={markdownText}></textarea>
        </>
    )
}

export default PostEditor;