import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import PostCard from '../../components/PostCard';
import Navbar from './NavBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
    root: {

    }
}));


const posts = [
    {
        id: 1,
        author: {
            name: 'Lucas Nhimi',
            username: 'lucasnhimi',
            avatar: "/images/avatars/avatar_1.jpeg"
        },
        title: "Criando um App do zero utilizando React.js",
        date: "April 7, 2020",
        description: "Fala pessoal! Qual o framework favorito de vcs?",
        hashtags: "#python, #javascript, #reactjs, #C#",
        image: "/images/posts/post9.jpeg"
    },
    {
        id: 2,
        author: {
            name: 'Lucas Nhimi',
            username: 'lucasnhimi',
            avatar: "/images/avatars/avatar_1.jpeg"
        },
        title: "Comparativo entre React.js e Vue.js - Performance",
        date: "April 1, 2020",
        description: "Quero criar um bootcamp gratuito para ensinar",
        hashtags: "#python, #javascript, #reactjs, #C#",
        image: "/images/posts/post8.png"
    },
];

function Feed() {

    const classes = useStyles();

    return (

        <Container maxWidth="lg">
            <Box display='flex'>
                <Navbar />
                <div className={classes.root}>
                    {
                        posts.map(post => (
                            <PostCard key={post.id} post={post}></PostCard>
                        ))
                    }
                </div>
            </Box>
        </Container>

    )
}

export default Feed;