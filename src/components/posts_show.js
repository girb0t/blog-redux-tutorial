import React, { Component } from 'react';

class PostsShow extends Component {
  render() {
    return(
      <div>Showing post {this.props.params.id}</div>
    );
  }
}

export default PostsShow;
