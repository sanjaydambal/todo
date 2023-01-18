import React from 'react'

class TodoItem extends React.Component {
  render() {
    return <li> <input type="checkbox"
      checked={this.props.todo.status}
      onChange={() => this.props.handleChangeProps(this.props.todo.id)} />
      <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
  Delete
</button>
      {this.props.todo.task}</li>

  }
}

export default TodoItem