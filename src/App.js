import React from 'react';
import NewsFeed from './NewsFeed';

const feedUrl = "http://time.com/newsfeed/feed/";

class App extends React.Component {
    render() {
        return (
            <NewsFeed url={feedUrl} />
        );
    }
}

export default App;
