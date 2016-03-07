import React, { Component } from 'react';

export default () => {
  return <div>List of blog posts</div>
}

class PostsIndex extends Component {
  componentWillMount() {
    console.log('fetch posts now!')
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

export default PostsIndex;
