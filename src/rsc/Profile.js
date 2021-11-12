import React from "react";
import vk from "./logos/vk.png";
import telegram from "./logos/telegram.png";
import twitch from "./logos/twitch.png";
import twitter from "./logos/twitter.png";
import web from "./logos/web.png";
import youtube from "./logos/youtube.png";

class Profile extends React.Component {
    render () {
        let userInfo = this.props.profileInfo.data,
            logos = {
                'vk': vk,
                'telegram': telegram,
                'twitch': twitch,
                'twitter': twitter,
                'web': web,
                'youtube': youtube
            };

        if (this.props.profileInfo.status !== 'ok') {
            return (
            <div className="information">Вы пока не вошли в свой аккаунт</div>
            );
        } else {
            let list = userInfo.social.map((item, index)=>{
                return (
                    <div key={index}>
                        <a href={item.link} target="_blank" rel="noreferrer">
                            <img src={logos[item.label]} alt={item.label}></img>
                        </a>
                    </div>
                );
            });
            return (
                <div className="information">
                    <p>Город: {userInfo.city}</p>
                    <p>Знание языков:</p>
                    <p>+ {userInfo.languages[0]}</p>
                    <p>+ {userInfo.languages[1]}</p>
                    <p>Ссылки:</p>
                    <div className="socials">{list}</div>
                </div>
            );
        }
        
    }
}

export default Profile;