import React from "react";
import Sheet from "./Sheet";

class Navigation extends React.Component {
    constructor () {
        super ();
        this.state = { 
            active: 'loginActive',
            profileData: {}
        };
    }

    submitForm () {
        const userName = document.getElementById('usernamesignup'),
            password = document.getElementById('passwordsignup');
    
        let message = "email=" + encodeURIComponent(userName.value) + "&password=" + encodeURIComponent(password.value),
            xhrPost = new XMLHttpRequest(),
            xhrGet = new XMLHttpRequest(),
            userID = '';
    
        xhrPost.open("POST", "https://mysterious-reef-29460.herokuapp.com/api/v1/validate", true);
        xhrPost.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhrPost.send(message);
        xhrPost.onreadystatechange = () => {
            if (xhrPost.readyState === 4 && xhrPost.status === 200) {
                if (JSON.parse(xhrPost.responseText).status === 'ok') {
                    userID = JSON.parse(xhrPost.responseText).data.id;
                    xhrGet.open("GET", "https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/" + userID, true);
                    xhrGet.onreadystatechange = () => {
                        if (xhrGet.readyState === 4 && xhrGet.status === 200) {
                            this.setState({ active: 'profileActive' });
                            this.setState({ profileData: JSON.parse(xhrGet.responseText)});
                        }
                    }
                    xhrGet.send(); 
                } else {
                    password.value = '';
                    alert('Имя пользователя или пароль введены неверно');
                }
                
            }
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
                <Sheet isActive={this.state.active} subForm={()=>{this.submitForm()}} profileData={this.state.profileData}/>
            </div>
        );
    }
}

export default Navigation;