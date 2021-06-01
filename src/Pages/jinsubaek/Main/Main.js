import React from 'react';
import './Main.scss';
import Aside from '../../../Components/jinsubaek/Aside/Aside';
import Nav from '../../../Components/Nav/Nav';
import Feed from '../../../Components/jinsubaek/Feed/Feed';

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
      const res = await fetch(
        'http://localhost:3000/data/jinsubaek/feedsData.json',
        { method: 'GET' }
      );
      const feeds = await res.json();

      this.setState({
        feeds: [...this.state.feeds, ...feeds],
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div className="Main">
        <Nav />
        <section>
          <ul>
            {this.state.feeds.map(feed => {
              return (
                <Feed
                  key={feed.id}
                  id={feed.id}
                  userName={feed.userName}
                  imagePath={feed.imagePath}
                  content={feed.content}
                  comments={feed.comments}
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
