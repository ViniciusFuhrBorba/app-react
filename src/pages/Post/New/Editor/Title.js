import React from 'react';

import TextField from '@material-ui/core/TextField';




function Title({ titulo, setTitulo }) {
    return (
        <TextField id='title' placeholder='Título' fullWidth value={titulo} onChange={setTitulo}></TextField>
    )
}


export default Title;