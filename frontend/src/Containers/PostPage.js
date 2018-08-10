import { connect } from 'react-redux';
import Component from '../Pages/Post';
import {
  loadItem as LoadPost,
  deleteItem as deletePost,
} from '../Actions/Posts';


const mapStateToProps = (state, props) => {
  const post = state.posts.data[props.match.params.id];
  const currentUserId = state.user.profile._id;
  const canEdit = post && post.addedBy._id === currentUserId;

  return {
    canEdit,
    id: props.match.params.id,
    isAuthenticated: state.user.isAuthenticated,
    post: state.posts.data[props.match.params.id],
  };
};

const mapDispatchToProps = dispatch => ({
  loadData: id => dispatch(LoadPost(id)),
  deletePost: id => () => dispatch(deletePost(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Component);
