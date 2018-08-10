import { connect } from 'react-redux';
import { patchItem as patchPost, loadItem as LoadPost } from '../Actions/Posts';
import { createItem as createImage } from '../Actions/Images';
import Component from '../Pages/NewPost';


const mapStateToProps = (state, props) => {
  const post = state.posts.data[props.match.params.id];

  return {
    initialValues: {
      ...post,
    },
  };
};

const mergeProps = (props, { dispatch }, ownProps) => ({
  ...props,
  ...ownProps,
  loadData: () => dispatch(LoadPost(ownProps.match.params.id)),
  onPostFormSubmit: values => dispatch(patchPost(ownProps.match.params.id, values)),
  createImage: values => dispatch(createImage(values)),
});


export default connect(mapStateToProps, null, mergeProps)(Component);
