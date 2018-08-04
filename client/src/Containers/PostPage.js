import { connect } from 'react-redux';
import Component from '../Pages/Post';
import { loadItems as loadPosts, loadItem as LoadPost } from '../Actions/Posts';


const mapStateToProps = (state, props) => {
  return {
    id: props.match.params.id,
    post: state.posts.data[props.match.params.id]
  };
}

const mapDispatchToProps = dispatch => ({
  loadData: (id) => dispatch(LoadPost(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Component);
