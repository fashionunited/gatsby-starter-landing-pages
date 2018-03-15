import React, { Component } from "react";
import { TextField, Dialog, DialogSurface, DialogBody } from "rmwc";

class Login extends Component {
  state = { email: "", password: "" };
  handleChange = val => evt => {
    this.setState({ ...this.state, [val]: evt.target.value });
  };

  loginForm = () => {
    return (
      <div>
        <TextField
          label="email"
          fullwidth
          onChange={this.handleChange("email")}
        />
        <TextField
          label="Password"
          type="password"
          fullwidth
          onChange={this.handleChange("password")}
        />
      </div>
    );
  };

  render() {
    return (
      <Dialog
        open={this.props.opened}
        onClose={this.props.toggle}
        title={"Login please!"}
        onAccept={() => {
          console.log(this.state);
        }}
        // body={this.loginForm()}
      >
        <DialogSurface>
          <DialogBody>{this.loginForm()}</DialogBody>
        </DialogSurface>
      </Dialog>
    );
  }
}

export default Login;
