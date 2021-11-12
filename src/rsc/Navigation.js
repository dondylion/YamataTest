import React from "react";
import Sheet from "./Sheet";

class Navigation extends React.Component {
    constructor () {
        super ();
        this.state = { 
            active: 'loginActive'
        };
    }

    isActive (event) {
        const login = document.querySelector('.login'),
            profile = document.querySelector('.profile');

        if (event.target === login && !login.classList.contains('active')) {
            login.classList.add('active');
            profile.classList.remove('active');
            this.setState({ active: 'loginActive' });
        }
        if (event.target === profile && !profile.classList.contains('active')) {
            profile.classList.add('active');
            login.classList.remove('active');
            this.setState({ active: 'profileActive' });
        }
    }

    render () {
        return (
            <div>
                <nav>
                    <div className="login toggles active" onClick={this.isActive.bind(this)}>Войти</div>
                    <div className="profile toggles" onClick={this.isActive.bind(this)}>Профиль</div>
                </nav>
                <Sheet isActive={this.state.active} />
            </div>
        );
    }
}

export default Navigation;