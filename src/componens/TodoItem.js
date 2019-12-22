import React from "react";
import '../App.css';

class TodoItem extends React.Component{
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#c5e2d2",
            textDecoration: "line-through"
        };
        const {completed, id, title} = this.props.todo;
        return (
            <li className="todo-item">
                <input type="checkbox"
                       checked = {completed}
                       onChange={()=>this.props.handleChange(id)}
                />
                <span style={completed? completedStyle: null}>
                {title}
                </span>
            </li>
        );
    }
}
export default TodoItem;