import React from 'react';
import { useSelector } from 'react-redux';
import MarkDown from 'react-markdown';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    imagePreview: {
        width: '100%',
        height: 200
    },
    avatar: {
        marginRight: theme.spacing(1),
    }
}));


function PostPreview({ image, titulo, tags, markdownText }) {

    const classes = useStyles();
    const account = useSelector(state => state.account)
    return (
        <>
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
                    {tags?.map(item => item.title).join(',')}
                </Typography>
            </Box>
            <Divider />
            <MarkDown source={markdownText} />
        </>
    )
}

export default PostPreview;