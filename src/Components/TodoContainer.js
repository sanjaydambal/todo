import React from 'react'
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
    state = {
        todos : [
            {
                id :uuidv4(),
                task : "complete the assignments",
                status : false
            },
            {
                id :uuidv4(),
                task : "complete the react project",
                status : false
            },
            {
                id :uuidv4(),
                task : "Discuss regarding React with Lakshmikant",
                status : true
            },
            {
                id :uuidv4(),
                task : "Complete Todo App",
                status : false
            },


        ]
    };
    handleChange = id => {
       this.setState(prevState=>({
        todos:this.state.todos.map(todo => {
            if(todo.id === id){
                return {
                    ...todo,
                status : !todo.status,
            }
        }
            return todo;
        })
       }))
    };
    delTodo = id => {
        this.setState({
          todos: [
            ...this.state.todos.filter(todo => {
              return todo.id !== id;
            })
          ]
        });
      };
      addTodoItem = task => {
        const newTodo = {
          id: 4,
          task: task,
          status: false
        };
        this.setState({
          todos: [...this.state.todos, newTodo]
        });
      };
  render() {
    return (
     <div>
        <Header/>
        <InputTodo addTodoProps = {this.addTodoItem}/>
     <TodoList todos = {this.state.todos} handleChangeProps = {this.handleChange} deleteTodoProps={this.delTodo}/>
     
     </div>
    )
  }
}

export default TodoContainer