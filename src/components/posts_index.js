import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

export default () => {
  return <div>List of blog posts</div>
}

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts;
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // gives us access to this.props.fetchPosts
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsIndex);
