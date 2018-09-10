import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';

const mapStateToProps = () => {
  return {
    formType: 'signup',
    navLink: <Link to="/login">log in</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
