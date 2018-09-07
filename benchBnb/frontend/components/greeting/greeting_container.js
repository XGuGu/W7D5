import { connect } from 'react-redux';

import { logout } from  '../../actions/sessions_actions';

import Greeting from './greeting'
const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id];
  }

};

const mapDispatchToPros = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToPros)(Greeting);
