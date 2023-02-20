import logo from "./logo.svg";
import "./App.css";
import Task1 from "./Task1";
import Task2 from "./Task2";
import { useEffect, useState } from "react";
import SearchFilter from "./SearchFilter";

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
      <input
        placeholder="search.."
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <ul>
        {list
          ? list
              .filter((value) => {
                console.log(value, "value");
                if (name === "") {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(name.toLowerCase())
                ) {
                  console.log(value, "name");
                  return value;
                }
              })
              .map((ele, index) => <li> {ele.name}</li>)
          : ""}
      </ul>

      <br />
      <hr />
      {/* <SearchFilter /> */}
    </div>
  );
}

export default App;
