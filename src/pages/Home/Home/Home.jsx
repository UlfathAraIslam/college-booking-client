import React from 'react';
import SearchField from './SearchField';
import Colleges from './Colleges/Colleges';
import Gallery from './Gallery/Gallery';
import Research from './Research/Research';

const Home = () => {
    return (
        <div>
            <SearchField/>
            <Colleges/>
            <Gallery/>
            <Research/>
        </div>
    );
};

export default Home;