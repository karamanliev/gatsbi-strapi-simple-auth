import React from "react";
import { navigate } from "gatsby";
import Form from "./Form";
import View from "./View";
import { handleLogin } from "../utils/auth";

class Login extends React.Component {
    state = {
        username: ``,
        password: ``
    };

    handleUpdate(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        handleLogin(this.state, "http://localhost:1337/auth/local", () => {
            navigate(`/app/profile`);
        });
    }

    render() {
        return (
            <View title="Log In">
                <Form
                    handleUpdate={e => this.handleUpdate(e)}
                    handleSubmit={e => this.handleSubmit(e)}
                />
            </View>
        );
    }
}

export default Login;
