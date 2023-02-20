import React, { useState } from "react";

function Task2() {
  const [name, setName] = useState();

  const [btnAppend, setBtnAppend] = useState(true);
  const [btnUndo, setBtnUndo] = useState(true);

  const [list, setList] = useState();

  const handelOnChange = (e) => {
    setName(e.target.value);
    setBtnAppend(false);
  };
  const handelOnSubmit = () => {
    setList(name);
    setBtnUndo(false);
    setBtnAppend(true);
  };

  const handelOnUndo = () => {
    setList("");
    setBtnUndo(true);
  };

  return (
    <div>
      <h1>Task2</h1>

      <input type="text" onChange={handelOnChange} />
      <button onClick={handelOnSubmit} disabled={btnAppend}>
        Append{" "}
      </button>
      <button onClick={handelOnUndo} disabled={btnUndo}>
        Undo{" "}
      </button>
      <br />
      <br />
      {list}
    </div>
  );
}

export default Task2;
