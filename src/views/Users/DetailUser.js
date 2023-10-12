import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailUser = (props) => {
  const [user, setUser] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(res.data.data);
    };
    fetchData();
  }, [id]);

  let isEmptyObj = Object.keys(user).length === 0;
  return (
    <>
      <h2>Hello, this is user {id} </h2>
      {isEmptyObj === false && (
        <>
          <div>
            User's name: {user.first_name} {user.last_name}
          </div>
          <div>User's email: {user.email}</div>
          <div>
            <img src={user.avatar} alt="avatar" />
          </div>
        </>
      )}
    </>
  );
};

export default DetailUser;
