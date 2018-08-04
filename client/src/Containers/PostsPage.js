import { connect } from 'react-redux';
import { loadItems as loadPosts } from '../Actions/Posts';
import Component from '../Pages/Posts';


const mapStateToProps = state => ({
  posts: state.posts.data
})

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(loadPosts())
});


export default connect(mapStateToProps, mapDispatchToProps)(Component);
