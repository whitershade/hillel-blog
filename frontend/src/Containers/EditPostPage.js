import { connect } from 'react-redux';
import { patchItem as patchPost, loadItem as LoadPost } from '../Actions/Posts';
import Component from '../Pages/NewPost';


const mapStateToProps = (state, props) => {
  const post = state.posts.data[props.match.params.id];

  return {
    initialValues: {
      ...post
    }
  }
}

const mergeProps = (props, { dispatch }, ownProps) => {
  return {
    ...props,
    ...ownProps,
    loadData: () => dispatch(LoadPost(ownProps.match.params.id)),
    onSubmit: values => dispatch(patchPost(ownProps.match.params.id, values)),
  }
}


export default connect(mapStateToProps, null, mergeProps)(Component);
