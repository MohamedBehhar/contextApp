import "./App.css";
import { addUser, deleteUser, getUser, updateUser } from "./axiosApi";
import { useGlobalContext } from "./Context";
import { useState } from "react";

function App() {
  const { hello } = useGlobalContext();

  ////// fetching users //////////////
  const [data, setData] = useState();
  const [id, setId] = useState(1);
  const fetchUser = async (id) => {
    const newData = await getUser(id);
    setData(newData.data);
  };

  const onFinishUpdateUser = async (e) => {
    e.preventDefault();
    let res = await    updateUser(e.target.elements.id.value, {
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
    });
    setData(res.data);
  };

  const onFinishAddUser = async (e) => {
    e.preventDefault();
    let res = await addUser({
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
      age: e.target.elements.age.value,
    });
    setData(res.data);
  };

  return (
    <div className="App">
      {/* get */}
      <div className="get-user">
        <h1>Get User</h1>
        <form action="">
          <input
            type="text"
            placeholder="Enter user Id"
            onChange={(e) => setId(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              fetchUser(id);
            }}
          >
            serch
          </button>
        </form>
      </div>
      <br />
      {/* add  */}
      <div className="add-user">
        <h1>Add User</h1>
        <form onSubmit={onFinishAddUser}>
          <label htmlFor="">
            First Name
            <input type="text" name="firstName" />
          </label>
          <label htmlFor="">
            Last Name
            <input type="text" name="lastName" />
          </label>
          <label htmlFor="">
            Age <input type="num" name="age" />
          </label>
          <button type="submit">Add User</button>
        </form>
      </div>
      <br />
      {/* updatee  */}
      <div className="updatae-user">
        <h1>Update User</h1>
        <form onSubmit={onFinishUpdateUser}>
          <label htmlFor="">
            First Name
            <input type="text" name="firstName" />
          </label>
          <label htmlFor="">
            Last Name
            <input type="text" name="lastName" />
          </label>
          <label htmlFor="">
            id{" "}
            <input
              type="num"
              name="id"
              onChange={(e) => setId(e.target.value)}
            />
          </label>
          <button type="submit">update User</button>
        </form>
      </div>
      <br />
      {/* delete */}
      <div className="delete-user">
        <h1>Delete User</h1>
        <form action="">
          <input
            type="text"
            placeholder="Enter user Id"
            onChange={(e) => setId(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              deleteUser(id);
            }}
          >
            Delete
          </button>
        </form>
      </div>
      {/* data  */}
      {data && (
        <div className="data">
          <h5>
            Full Name: {data.firstName} {data.lastName}
          </h5>
          <h5>Id: {data.id}</h5>
          <h5>Gender: {data.gender} </h5>
          <h5>Age: {data.age}</h5>
          <h5>Email: {data.email}</h5>
        </div>
      )}
    </div>
  );
}

export default App;
