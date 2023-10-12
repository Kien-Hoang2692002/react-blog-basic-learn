import React from "react";
import { redirect } from "react-router-dom";
import avatar from "../../assets/images/avatar.jpg";
import { connect } from "react-redux";

class Home extends React.Component {
  handleClick = () => {
    return redirect("/todo");
  };

  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user);
  };

  handleCreateUser = () => {
    this.props.addUserRedux();
  };

  render() {
    let listUsers = this.props.dataRedux;
    let name = "Kien";
    return (
      <>
        <div>Hello guys, I'm {name}</div>
        <button type="button" onClick={() => this.handleClick()}>
          Go home
        </button>
        <div>
          <img src={avatar} alt="avatar" style={{ width: 170, height: 256 }} />
        </div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}{" "}
                  <button onClick={() => this.handleDeleteUser(item)}>X</button>
                </div>
              );
            })}
          <button onClick={() => this.handleCreateUser()}>Add user</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({
        type: "DELETE_USER",
        payload: userDelete,
      }),
    addUserRedux: () =>
      dispatch({
        type: "CREATE_USER",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
