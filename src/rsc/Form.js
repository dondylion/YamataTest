import React from "react";

class Form extends React.Component {
    submitForm (event) {
        event.preventDefault();

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
                userID = JSON.parse(xhrPost.responseText).data.id;
                xhrGet.open("GET", "https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/" + userID, true);
                xhrGet.onreadystatechange = () => {
                    if (xhrGet.readyState === 4 && xhrGet.status === 200) {
                        console.dir(JSON.parse(xhrGet.responseText));
                    }
                }
                xhrGet.send(); 
            }
        };
        
    }

    render () {
        return(
            <div className="loginform">
                <form>
                    <label htmlFor="usernamesignup">Логин</label>
                    <input id="usernamesignup" name="usernamesignup" required="required" type="text" className="input-text"></input>
                    <label htmlFor="passwordsignup">Пароль</label>
                    <input id="passwordsignup" name="passwordsignup" required="required" type="password" className="input-text"></input>
                    <input id="submitsignup" type="submit" value="Отправить" onClick={this.submitForm.bind(this)}></input>
                </form>
            </div>
        );
    }
};

export default Form;