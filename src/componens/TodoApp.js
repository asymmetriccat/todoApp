import React from "react";
import Todos from "./Todos";
import Header from "./Header";
import '../App.css';

class TodoApp extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "develop website and add content",
                completed: false
            },
            {
                id: 3,
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
    render(){
        return (
            <div className="container">
                <Header/>
               <Todos todos={this.state.todos} handleChange = {this.handleChange}/>

            </div>
        );
    }
}
export default TodoApp;