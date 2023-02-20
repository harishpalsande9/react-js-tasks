import logo from "./logo.svg";
import "./App.css";
import Task1 from "./Task1";
import Task2 from "./Task2";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [sortOrder, setSortOrder] = useState("asending");
  const [abc, setAbc] = useState([]);
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    let responseData = await data.json();
    console.log(responseData);
    setAbc(responseData);
    setList(responseData);
  };

  const sortList = async () => {
    if (sortOrder === "asending") {
      let data = [...list].sort((a, b) =>
        a.name.length > b.name.length ? 1 : -1
      );
      setList(data);
      setSortOrder("decending");
    }

    if (sortOrder === "decending") {
      let data = [...list].sort((a, b) =>
        a.name.length < b.name.length ? 1 : -1
      );
      setList(data);
      setSortOrder("default");
    }
    if (sortOrder === "default") {
      setList(abc);
      setSortOrder("asending");
    }
  };

  const [name, setName] = useState("");

  return (
    <div>
      <h1>sdf</h1>
      <button onClick={sortList}>sort</button>
      <ul>{list ? list.map((ele, index) => <li> {ele.name}</li>) : ""}</ul>
    </div>
  );
}

export default App;
