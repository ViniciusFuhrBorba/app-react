import React from 'react';
import Typography from '@material-ui/core/Typography'


import { makeStyles } from '@material-ui/core/styles';
import typograpy from '../../theme/typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100vh',

    },
    image: {
        backgroundColor: 'red',
        flexBasis: '58%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        backgroundColor: 'blue',
        flexBasis: '42%'
    },
    form2: {
        display: 'flex',
        flexDirection: 'column',
        margin: '64px 32px',
        alignItems: 'center'
    }
}));


function SignIn() {

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <div className={classes.image}>
                <Typography style={{ color: '#fff', fontSize: 35, lineHeight: '45px' }}>
                    <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
                </Typography>
                <Typography variant='body2' style={{ color: 'rgb(255,255,255,0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px' }}>
                    Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
                </Typography>
            </div>

            <div className={classes.form}>
                <form className={classes.form2}>
                    <h4>Acesso</h4>
                    <input type="text"/>
                    <input type="text"/>
                </form>
            </div>

        </div>
    )
}

export default SignIn;