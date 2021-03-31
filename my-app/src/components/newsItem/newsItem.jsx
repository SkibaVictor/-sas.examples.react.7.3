import React from 'react';
class NewsItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: props.likes,
        title: props.title,
        content: props.content,
      }
    }
    render() {
      return (
        <div className="list-group-item d-flex justify-content-between">
          <div><div className="font-weight-bold">{this.state.title}</div>
            <div><em>{this.state.content}</em></div>
          </div>
          <div><span className="mr-3">Likes - {this.state.likes}</span>
          </div>
        </div>);
    }
  }

  export default NewsItem;

  