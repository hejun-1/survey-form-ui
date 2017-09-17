import React from 'react';
import { LoginActionCreator } from './actions';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import endpoint from '../../backend';
import $ from 'jquery';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.doLogin = this.doLogin.bind(this);
    this.state = {
      error: null
    };
    this.username = '';
    this.password = '';
  }

  doLogin() {
    const session = {
      username: this.username,
      password: this.password
    };
    $.ajax({
      type: 'POST',
      url: `${endpoint}/users/session`,
      data: JSON.stringify(session),
      contentType: 'application/json',
      success: (data) => {
        if (data === 'SUCCESS') {
          this.props.onAuthenticated(session);
          browserHistory.push('/listing');
        } else {
          this.setState({
            error: '登录失败'
          });
        }
      }
    });
  }

  render() {
    return (
      <div className="login-form-container">
        { this.state.error && <div className="login-error-msg">{this.state.error}</div> }
        <label>用户名</label>
        <div className="ui form"><input onChange={evt => this.username = evt.target.value } className="form-control"/></div>
        <label>密码</label>
        <div className="ui form"><input onChange={evt => this.password = evt.target.value } type="password" className="form-control"/></div>
        <button className="btn btn-default" onClick={this.doLogin}>登录</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  { onAuthenticated: (session) => dispatch(LoginActionCreator(session)) }
)

export default connect(null, mapDispatchToProps)(Login);