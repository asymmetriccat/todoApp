import React from "react";
import Todos from "./Todos";
import Header from "./Header";
import '../App.css';
import AddTodo from "./AddTodo";
import uuid from "uuid";

class TodoApp extends React.Component {
    state = {
        todos: [
            {
                id: uuid.v4(),
                title: "Setup development environment",
                completed: true
            },
            {
                id: uuid.v4(),
                title: "develop website and add content",
                completed: false
            },
            {
                id: uuid.v4(),
                title: "deployment",
                completed: false
            }

        ]
    };
    handleChange =(id)=>{
       this.setState({
           todos: this.state.todos.map( todo =>{
               if(todo.id ===id){
                   todo.completed = !todo.completed;
        }
           return todo;
           }
           )
       });
    };

    deleteTodo =id =>{
        this.setState({
            todos: [
                ...this.state.todos.filter(todo =>{
                return todo.id!==id;}
                )
            ]
        });
    };
    addTodo = title =>{
        const newTodo ={
            id: uuid.v4(),
            title:title,
            completed: false
        };
        this.setState({
            todos:[...this.state.todos, newTodo]
        });
    }
    render(){
        return (
            <div className="container">
                <Header/>
                <AddTodo addTodo ={this.addTodo}/>
               <Todos todos={this.state.todos}
                      handleChange = {this.handleChange}
               deleteTodo = {this.deleteTodo} />
            </div>

        );
    }
}
export default TodoApp;