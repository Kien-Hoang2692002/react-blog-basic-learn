import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";

import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    ListTodo: [
      {
        id: "todo1",
        title: "Doing homework",
      },
      {
        id: "todo2",
        title: "Making video",
      },
      {
        id: "todo3",
        title: "Fix bug",
      },
    ],
    editTodo: {},
  };

  addNewtodo = (todo) => {
    this.setState({
      ListTodo: [...this.state.ListTodo, todo],
    });

    toast.success("Wow so easy");
  };

  handleEditTodo = (todo) => {
    let { editTodo, ListTodo } = this.state;

    let isEmptyObj = Object.keys(editTodo).length === 0;

    // save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let ListTodosCopy = [...ListTodo];

      let objIndex = ListTodosCopy.findIndex((item) => item.id === todo.id);

      ListTodosCopy[objIndex].title = editTodo.title;

      this.setState({
        ListTodo: ListTodosCopy,
        editTodo: {},
      });

      toast.success("Updated todo successfully");
      return;
    }
    //edit
    this.setState({
      editTodo: todo,
    });
  };
  handleOnChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  handleDeleteTodo = (todo) => {
    let currentTodo = this.state.ListTodo;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);

    this.setState({
      ListTodo: currentTodo,
    });

    toast.success("Delete successfully");
  };

  render() {
    let { ListTodo, editTodo } = this.state;

    let isEmptyObj = Object.keys(editTodo).length === 0;

    return (
      <>
        <div>To do list</div>
        <div className="list-todo-container">
          <AddTodo addNewtodo={this.addNewtodo} />

          <div className="list-todo-content">
            {ListTodo &&
              ListTodo.length > 0 &&
              ListTodo.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              onChange={(event) =>
                                this.handleOnChangeEditTodo(event)
                              }
                              value={editTodo.title}
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      onClick={() => this.handleEditTodo(item)}
                      className="edit"
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      onClick={() => this.handleDeleteTodo(item)}
                      className="delete"
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListTodo;
