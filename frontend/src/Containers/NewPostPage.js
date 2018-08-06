import { connect } from 'react-redux';
import { createItem as createPost } from '../Actions/Posts';
import Component from '../Pages/NewPost';


const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(createPost(values)),
});


export default connect(null, mapDispatchToProps)(Component);
