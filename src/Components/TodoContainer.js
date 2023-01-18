import React from 'react'
import TodoList from './TodoList';
import Header from './Header';

class TodoContainer extends React.Component {
    state = {
        todos : [
            {
                id :1,
                task : "complete the assignments",
                status : true
            },
            {
                id :2,
                task : "complete the react project",
                status : false
            },
            {
                id :3,
                task : "Discuss regarding React with Lakshmikant",
                status : true
            }

        ]
    };
    handleChange = (id) => {
        console.log("clicked",id)
    }
  render() {
    return (
     <div>
        <Header/>
     <TodoList todos = {this.state.todos} handleChangeProps = {this.handleChange}/>
     
     </div>
    )
  }
}

export default TodoContainer