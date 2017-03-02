import React, { Component } from 'react'
import { Card, CardSection, Input, Button } from './common'
import { connect } from 'react-redux'

import { emailChanged, passwordChanged } from '../actions'

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }
  
  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"
            placeholder="user@example.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input 
            secure
            label="Password"
            placeholder="Enter your password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { email, password } = state.auth
  return { email, password }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm)