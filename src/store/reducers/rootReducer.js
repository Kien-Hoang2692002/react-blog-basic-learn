const initState = {
  users: [
    { id: 1, name: "Kien" },
    { id: 2, name: "John" },
    { id: 3, name: "Jame" },
  ],
  posts: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      console.log("a", users);
      return {
        ...state,
        users,
      };
    case "CREATE_USER":
      let id = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
      let name = `Kien${id}`;
      let user = {
        id: id,
        name: name,
      };
      return {
        ...state,
        users: [...state.users, user],
      };
    default:
      break;
  }

  return state;
};

export default rootReducer;
