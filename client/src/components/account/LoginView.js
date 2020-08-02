import React, { Component } from 'react';

export default class LoginView extends Component {
    constructor(props) {
        super(props);
    }

    onSubmit(event) {
        event.preventDefault();

        console.log('Submit Login');
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>UserName: <input name='user-name' type='text' id='user-name' /></label>
                        <label>Password: <input name='password' type='password' id='password' /></label>
                    </div>
                    <div>
                        <button type='submit' onClick={this.onSubmit.bind(this)}>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}