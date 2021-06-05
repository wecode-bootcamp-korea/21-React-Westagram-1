import React from 'react';
import Aside from './Aside/Aside';
import Nav from '../../../Components/Nav/Nav';
import Feed from './Feed/Feed';
import { createDate, createId } from '../utils/utils';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feeds: [],
    };
  }

  componentDidMount() {
    this.fetchFeeds();
  }

  async fetchFeeds() {
    try {
      const res = await fetch('data/jinsubaek/feedsData.json', {
        method: 'GET',
      });
      const feeds = await res.json();

      this.setState({
        feeds,
      });
    } catch (err) {
      console.error(err);
    }
  }

  addComment = (comment, feedId) => {
    const newFeeds = this.state.feeds.map((feed, index) =>
      index + 1 === feedId
        ? {
            ...feed,
            comments: [
              ...feed.comments,
              {
                userName: 'randomName',
                content: comment,
                id: createId(),
                date: createDate(),
              },
            ],
          }
        : feed
    );
    this.setState({
      feeds: newFeeds,
    });
  };

  deleteComment = (commentId, feedId) => {
    console.log(commentId, feedId);
    const newFeeds = this.state.feeds.map((feed, index) =>
      index + 1 === feedId
        ? {
            ...feed,
            comments: feed.comments.filter(comment => comment.id !== commentId),
          }
        : feed
    );

    this.setState({
      feeds: newFeeds,
    });
  };

  render() {
    const { feeds } = this.state;
    return (
      <div className="main">
        <Nav />
        <section>
          <ul>
            {feeds.map(feed => {
              return (
                <Feed
                  key={feed.id}
                  id={feed.id}
                  userName={feed.userName}
                  imagePath={feed.imagePath}
                  content={feed.content}
                  comments={feed.comments}
                  addComment={this.addComment}
                  deleteComment={this.deleteComment}
                />
              );
            })}
          </ul>
        </section>
        <Aside />
      </div>
    );
  }
}

export default Main;
