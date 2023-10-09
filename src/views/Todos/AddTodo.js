import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnChangeTiltle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddTodo = () => {
    if (!this.state.title) {
      toast.error("Missing title todo");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 10000),
      title: this.state.title,
    };

    this.props.addNewtodo(todo);
    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          onChange={(event) => this.handleOnChangeTiltle(event)}
          value={title}
          type="text"
          className=""
        />
        <button
          onClick={() => this.handleAddTodo()}
          type="button"
          className="add"
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
