import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

const mapStateToProps = () => {
  return {
    formType: 'login',
    navLink: <Link to="/signup">sign up</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
