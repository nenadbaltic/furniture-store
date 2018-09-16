import React from 'react';
import { firebase } from '../firebase/firebase';

class AdminLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          error: '',
          toggle: false
        };
    }

    emailChange = (e) => {
        let email = e.target.value;
        this.setState(() => {
            return { email: email };
        })
    }
    passwordChange = (e) => {
        let password = e.target.value;
        this.setState(() => {
            return { password: password };
        })
    }
    toggle = () => {
        this.setState(() => {
            return { toggle: !this.state.toggle }
        })
    }
    login = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
          this.setState(() => {
            return { error: 'Wrong email or password!' }
          })
            console.log(error);
          });
    }

    render() {
        return (
            <div className="admin-toggle">
                <button onClick={this.toggle}>Admin Toggle</button>
                {this.state.toggle &&
                <div className="admin-login">
                    {this.state.error && <p>{this.state.error}</p>}
                    <form>
                        <div className="input-group">
                            <label>Email address</label>
                            <input value={this.state.email} onChange={this.emailChange} type="email" placeholder="Enter email"  />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input value={this.state.password} onChange={this.passwordChange}  type="password" placeholder="Enter password" />
                        </div>
                        <button className="admin-button" type="submit" onClick={this.login}>Admin Login</button>
                    </form>
                </div>
                }
            </div>
        );
    }
}

export default AdminLogin;