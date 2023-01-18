import React from 'react'
import TodoItem from './TodoItem'


export class TodoList extends React.Component {z
  render() {
    return (
      <ul>
        {
            this.props.todos.map( obj => (
                <TodoItem key={obj.id} todo={obj} handleChangeProps = {this.props.handleChangeProps} />
            ))
        }
      </ul>
    )
  }
}

export default TodoList
