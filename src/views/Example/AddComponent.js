import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangetitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangesalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = () => {
    if (!this.state.title || !this.state.salary) {
      alert("Missing required fields");
      return;
    }
    console.log("Check data submit:", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <form>
        <label htmlFor="fname">Job's Title:</label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleChangetitle(event)}
        />
        <br />
        <label htmlFor="lname">Salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChangesalary(event)}
        />
        <br />
        <button type="button" onClick={() => this.handleSubmit()}>
          Submit
        </button>
      </form>
    );
  }
}

export default AddComponent;
