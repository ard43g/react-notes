import React, { Component } from "react";

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            text: event.target.value,
        });
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.state.text) {
            const text = this.state.text;

            if (text.length > 0) {
                this.props.onAdd(text);
                this.setState({
                    text: "",
                });
            }
        }
    }

    render() {
        return (
            <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Добавьте новую запись"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button type="submit" className="btn btn-outline-secondary">
                    Добавить
                </button>
            </form>
        );
    }
}
