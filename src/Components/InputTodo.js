import React, { Component } from "react"

class InputTodo extends Component {
    state = {
        task: ""
      };
    onChange = e => {
        console.log(e)
        this.setState({
         [ e.target.name]: e.target.value
        });
      };
      handleSubmit = e => {
        console.log(e)
        e.preventDefault();
        this.props.addTodoProps(this.state.task);
        this.setState({
            task: ""
          });
      };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo..." value ={this.state.task} name = "task" onChange = {this.onChange}/>
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo