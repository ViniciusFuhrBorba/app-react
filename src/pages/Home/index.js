import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Routes, Route } from 'react-router-dom';


import Header from './Header';
import NewPost from '../Post/New';
import Feed from '../Feed';

const useStyles = makeStyles({

    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        height: 'calc(100vh - 94px)',
        padding: 24
    },
    toolBar: {
        minHeight: 64,
    }

})


function Home() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolBar}></div>
            <main className={classes.main}>
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/post/new" element={<NewPost />} />
                    <Route path='*' element={<h1>Not Found 404!</h1>}></Route>
                </Routes>
            </main>
        </div>
    )
}

export default Home;