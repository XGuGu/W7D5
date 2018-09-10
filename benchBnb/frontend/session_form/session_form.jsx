import { withRouter } from 'react-router-dom';
import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="login">
            <label>Username:
              <input type="text" value={this.state.username} onChange={this.update('username')}/>
            </label>
            <label>Password:
              <input type="password" value={this.state.password} onChange={this.update('password')}/>
            </label>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
