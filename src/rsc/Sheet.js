import React from "react";
import Form from "./Form";
import Profile from "./Profile";

class Sheet extends React.Component {
    render () {
        if (this.props.isActive === 'loginActive') {
            return (
                <Form />
            );
        } else {
            return (
                <Profile />
            );
        }
    }
}

export default Sheet;