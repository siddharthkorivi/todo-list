import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: "",
    }

    addValue = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: "" })
    }

    render() {
        return (
            <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="  Add Todo ..."
                    style=
                    {{
                        flex: "10", padding: "10px", outline: "none",
                        border: "1px solid #ccc"
                    }}
                    value={this.state.title}
                    onChange={this.addValue}
                />
                <input type="submit" value="Submit" className="btn"
                    style={{ flex: "1" }}
                />
            </form>
        )
    }
}

export default AddTodo
