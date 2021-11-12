import React from "react";

class Profile extends React.Component {
    render () {
        let userInfo = this.props.profileInfo.data;
        console.dir(userInfo);
        if (this.props.profileInfo.status !== 'ok') {
            return (
            <div className="information">Вы пока не вошли в свой аккаунт</div>
            );
        } else {
            const list = userInfo.social.map((item, index)=>{
                return (
                    <div key={index}>{item.label}</div>
                );
            });
            return (
                <div className="information">
                    <p>Город: {userInfo.city}</p>
                    <p>Знание языков:</p>
                    <p>+ {userInfo.languages[0]}</p>
                    <p>+ {userInfo.languages[1]}</p>
                    <p>Ссылки:</p>
                    <div class="socials">{list}</div>
                </div>
            );
        }
        
    }
}

export default Profile;