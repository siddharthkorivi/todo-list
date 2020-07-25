import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyles = () => {
        return {
            borderBottom: "1px #fff solid",
            padding: "10px",
            background: "#ccc",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyles()}>
                <h3>
                    <input type="checkbox"
                        onChange={this.props.markComplete.bind(this, id)}
                        style={{ outline: "none" }}
                    />
                    {" "}
                    {title}
                    {" "}
                    <button style={btnStyle}
                        onClick={this.props.delTodo.bind(this, id)}>x
                    </button>
                </h3>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    padding: "5px 9px",
    border: "none",
    borderRadius: "50%",
    outline: "none",
    cursor: "pointer",
    float: "right",
}

export default TodoItem

// { textAlign: "center", margin:10 }
