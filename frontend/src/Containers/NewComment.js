import { connect } from 'react-redux';
import { createItem as createComment } from '../Actions/Comments';
import Component from '../Pages/Post/CommentsBlock/NewComment';


const mergeProps = (props, { dispatch }, { postId, ...ownProps }) => {
  return {
    ...props,
    ...ownProps,
    onSubmit: values => dispatch(createComment({ ...values, relatedPost: postId })),
  }
}


export default connect(null, null, mergeProps)(Component);
