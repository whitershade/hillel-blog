import { connect } from 'react-redux';
import Component from '../Pages/Posts';
import {
  loadItems as loadPosts,
  deleteItem as deletePost,
} from '../Actions/Posts';


const mapStateToProps = state => ({
  posts: state.posts.data,
  isLoading: state.posts.isLoading,
  currentUserId: state.user.profile._id,
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(loadPosts()),
  deletePost: id => () => dispatch(deletePost(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Component);
