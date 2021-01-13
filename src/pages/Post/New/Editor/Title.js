import React from 'react';

import TextField from '@material-ui/core/TextField';

import { usePost } from '../../../../context/PostContext';


function Title() {

    const ctx = usePost();

    const { titulo, setTitulo } = ctx;
    return (
        <TextField id='title' placeholder='Título' fullWidth value={titulo} onChange={setTitulo}></TextField>
    )
}


export default Title;