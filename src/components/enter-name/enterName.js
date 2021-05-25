import React, { Component } from "react";
import "./enter-name.css";
import ErrorField from "../error-field";

export default class EnterName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            user: "",
            error: false,
            enter: false,
            formAdded: false,
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            formAdded: true,
        });
    }

    onNameChange = (e) => {
        this.setState({
            text: e.target.value,
            user: e.target.value,
        });
    };
    onSubmit = (e) => {
        const { user } = this.state;
        e.preventDefault();
        if (user.length >= 1) {
            this.props.addName(user);
            this.setState({
                text: "",
                user: "",
                error: false,
                enter: false,
            });
        } else {
            this.setState({
                error: true,
                enter: false,
            });
        }
    };

    render() {
        return (
            this.props.newName && (
                <>
                    <form className="d-flex name-form" onSubmit={this.onSubmit}>
                        <input
                            className="name-label form-control"
                            type="text"
                            placeholder="Введите ваше имя"
                            onChange={this.onNameChange}
                            value={this.state.text}
                        ></input>

                        <button className="btn btn-outline-success" type="submit">
                            Отправить
                        </button>
                    </form>
                    {this.state.error && <ErrorField />}
                </>
            )
        );
    }
}
