import React from 'react';
import Typography from '@material-ui/core/Typography'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import FormHelperText from '@material-ui/core/FormHelperText';


import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { signUp } from '../../actions/accountActions';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(/images/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    avatar: {
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1)
    },
    button: {
        marginTop: theme.spacing(1)
    }, form: {
        margin: theme.spacing(2, 4)
    },
    error: {
        justifyContent: 'center',
        display: 'flex'
    }
}));


function Copyright() {
    return (
        <Typography variant='body2' align='center'>
            {'Copyright ©'}
            <a color='inherit' href='https://www.youtube.com/channel/UCjv8UzAsmcUp7podxEq2-XQ'>
                Vinicius
            </a>{'  '}
            {new Date().getFullYear()}
        </Typography>
    )
}


function SignUp() {

    const classes = useStyles();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (

        <Grid container className={classes.root}>
            <Grid
                item
                container
                direction='column'
                justify='center'
                alignItems='center'
                md={7}
                className={classes.image}>
                <Typography style={{ color: '#fff', fontSize: 35, lineHeight: '45px' }}>
                    <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
                </Typography>
                <Typography variant='body2' style={{ color: 'rgb(255,255,255,0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px' }}>
                    Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
              </Typography>
            </Grid>
            <Grid item md={5}>
                <Box display='flex' flexDirection='column' alignItems='center' mt={8}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant='h5'>Acesso</Typography>

                    <Formik
                        initialValues={{
                            fullName: '',
                            email: '',
                            password: ''
                        }}
                        validationSchema={
                            Yup.object().shape({
                                fullName: Yup.string().max(255).required("Favor informar nome completo"),
                                email: Yup.string().email("Favor informar um email válido").max(255).required("Favor informar um email"),
                                password: Yup.string().max(255).required("Favor informar uma senha"),
                            })}
                        onSubmit={async (values, {
                            setErrors,
                            setStatus,
                            setSubmitting
                        }) => {
                            try {
                                await dispatch(signUp(values.fullName, values.email, values.password));
                                navigate('/');
                            }
                            catch (error) {
                                const message = (error.response && error.response.data.message) || "Something went wrong";
                                setStatus({ success: false });
                                setErrors({ submit: message });
                                setSubmitting(false);
                            }
                        }}
                    >
                        {
                            ({ errors, handleChange, handleSubmit, isSubmitting, values }) => (
                                <form noValidate className={classes.form} onSubmit={handleSubmit}>
                                    <TextField variant='outlined'
                                        margin='normal' required fullWidth
                                        id='fullName' label='Fullname'
                                        name='fullName' autoComplete='fullName'
                                        autoFocus value={values.fullName} onChange={handleChange}
                                        helperText={errors.fullName} error={Boolean(errors.fullName)}>
                                    </TextField>
                                    <TextField variant='outlined'
                                        margin='normal' required fullWidth
                                        id='email' label='E-mail'
                                        name='email' autoComplete='email'
                                        autoFocus value={values.email} onChange={handleChange}
                                        helperText={errors.email} error={Boolean(errors.email)}>
                                    </TextField>
                                    <TextField variant='outlined'
                                        margin='normal' required fullWidth
                                        id='password' label='Senha'
                                        name='password' type='password'
                                        autoComplete='current-password'
                                        value={values.password} onChange={handleChange}
                                        helperText={errors.password} error={Boolean(errors.password)}>
                                    </TextField>
                                    {
                                        errors.submit &&
                                        <FormHelperText error className={classes.error}>
                                            {errors.submit}
                                        </FormHelperText>
                                    }
                                    <Button className={classes.button} fullWidth variant='contained' color='primary' type='submit' disabled={isSubmitting}>Cadastrar-se</Button>
                                    <Grid container>
                                        <Grid item>
                                            <Link >Já possui uma conta? Clique aqui</Link>
                                        </Grid>
                                    </Grid>
                                </form>
                            )
                        }
                    </Formik>
                    <Copyright />
                </Box>
            </Grid>
        </Grid>
    )
}

export default SignUp;