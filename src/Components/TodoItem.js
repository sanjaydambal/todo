import React from 'react'

 class TodoItem extends React.Component {
  render() {
    return  <li> <input type="checkbox" checked = {this.props.todo.status} onChange = {()=>this.props.handleChangeProps(this.props.todo.id)}/>  {this.props.todo.task}</li>
    
  }
}

export default TodoItem