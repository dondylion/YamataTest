import React from "react";

//let profileData = {};

class Form extends React.Component {
    render () {
        return(
            <div className="loginform">
                <form>
                    <label htmlFor="usernamesignup">Логин</label>
                    <input id="usernamesignup" name="usernamesignup" required="required" type="text" className="input-text"></input>
                    <label htmlFor="passwordsignup">Пароль</label>
                    <input id="passwordsignup" name="passwordsignup" required="required" type="password" className="input-text"></input>
                    <input type="button" value="Отправить" id="submitsignup" onClick={this.props.submit}></input>
                </form>
            </div>
        );   
    }
};

export default Form;