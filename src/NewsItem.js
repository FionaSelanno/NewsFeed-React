import React from 'react';
import NewsFeed from './NewsFeed';
import { row, col } from './styles/grid';
import { responsiveWidth } from './styles/containers';

class NewsItem extends React.Component {
    render() {
      console.log(this.props);

        return (
          <div>
            <h2>{this.props.title}</h2>
            <h3>{this.props.discription}</h3>
            <p><a href={this.props.link}>Read article</a></p>
            <img src={this.props.image} />
            </div>
        );
    }
}

export default NewsItem;
