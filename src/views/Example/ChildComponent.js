import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  render() {
    let { name, age, address, arrJobs } = this.props;
    // let name = this.props.name;
    let { showJobs } = this.state;
    // let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <h4>
              Children Component: {name} - {age} - {address}{" "}
            </h4>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary + "$"}
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   let { name, age, address, arrJobs } = props;

//   return (
//     <>
//       <h4>
//         Children Component: {name} - {age} - {address}
//       </h4>
//       <div className="job-lists">
//         {arrJobs.map((item, index) => {
//           return (
//             <div key={item.id}>
//               {item.title} - {item.salary}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

export default ChildComponent;
