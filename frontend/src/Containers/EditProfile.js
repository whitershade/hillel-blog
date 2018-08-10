import { connect } from 'react-redux';
import { editItem as editProfile } from '../Actions/Users';
import Component from '../Pages/Register';


const mapStateToProps = (state, props) => {
  const user = state.user.profile;

  return {
    initialValues: {
      ...user
    }
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(editProfile(values)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Component);
