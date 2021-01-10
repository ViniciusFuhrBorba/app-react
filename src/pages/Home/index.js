import React from 'react';
import './style.css'

import Header from './components/Header';

function Home() {
    return (

        <div>
            <Header></Header>
            <main className="main">
                <div className="navbar">
                    navibar
                </div>
                <div className="feed">
                    feed
                </div>
            </main>
        </div>
    )
}

export default Home;