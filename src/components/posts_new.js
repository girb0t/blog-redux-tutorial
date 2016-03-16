import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    // this.props.handleSubmit is provided by the `reduxForm` function exported below (similar to the `connect` function)
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    //same as `const handleSubmit = this.props.handleSubmit`
    //same as `const title = this.props.fields.title`

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

         <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

         <div className="form-group">
          <label>Content</label>
          <input type="text" className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }

  return errors;
}

// reduxForm() is similar to connect()
// connect: first arg is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: first arg is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);

// user types something in...record it on application state (instead of component state):
// state === {
//   form: {
//     PostsNewForm: {
//       title: '...',
//       categories: '...',
//       content: '...',
//     }
//   }
// }
