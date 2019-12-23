import React from "react";
import Todos from "./Todos";
import Header from "./Header";
import '../App.css';
import AddTodo from "./AddTodo";
import uuid from "uuid";
import axios from "axios";

class TodoApp extends React.Component {
    state = {
        todos: []
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

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos",{
            params: {
                _limit:10
            }
        }).then(response =>this.setState({todos: response.data}));
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