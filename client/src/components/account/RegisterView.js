import React, { Component } from 'react';

export default class RegisterView extends Component{
    constructor(props) {
        super(props);
    }

    onSubmit(event) {
        event.preventDefault();

        console.log('Submit Register');
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label for='user-name'>UserName: <input name='user-name' type='text' id='user-name' /></label>
                        <label for='password'>Password: <input name='password' type='password' id='password' /></label>
                        <label for='re-password'>ReEnter-Password: <input name='re-password' type='password' id='re-password' /></label>
                    </div>
                    <div>
                        <button type='submit' onClick={this.onSubmit.bind(this)}>Register</button>
                    </div>
                </form>
            </div>
        )
    }
}