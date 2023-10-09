import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: "Job1", title: "Developer", salary: "500" },
      { id: "Job2", title: "Tester", salary: "400" },
      { id: "Job3", title: "Project Manager", salary: "1000" },
    ],
  };

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };

  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          name={"Kiên"}
          age={21}
          address={"Hà Nội"}
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}

export default MyComponent;
