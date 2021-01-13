import React, { useContext } from 'react';

import TextField from '@material-ui/core/TextField';

import { PostContext } from '../../../../context/PostContext';


function Title() {

    const ctx = useContext(PostContext);

    const { titulo, setTitulo } = ctx;
    return (
        <TextField id='title' placeholder='Título' fullWidth value={titulo} onChange={setTitulo}></TextField>
    )
}


export default Title;