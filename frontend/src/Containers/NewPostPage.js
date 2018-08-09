import { connect } from 'react-redux';
import { createItem as createPost } from '../Actions/Posts';
import { createItem as createImage } from '../Actions/Images';
import Component from '../Pages/NewPost';


const mapDispatchToProps = dispatch => ({
  onPostFormSubmit: values => dispatch(createPost(values)),
  createImage: values => dispatch(createImage(values))
});


export default connect(null, mapDispatchToProps)(Component);
