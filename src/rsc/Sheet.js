import React from "react";
import Form from "./Form";
import Profile from "./Profile";

class Sheet extends React.Component {
    

    render () {
        if (this.props.isActive === 'loginActive') {
            return (
                <Form submit={this.props.subForm} />
            );
        } else {
            return (
                <Profile profileInfo={this.props.profileData}/>
            );
        }
    }
}

export default Sheet;