import React, { useState } from "react";

function Task1() {
  const [home, setHome] = useState(true);
  const [blogs, setBlogs] = useState(false);
  const [contactUs, setContactUs] = useState(false);

  const handelClickHome = () => {
    setHome(true);
    setBlogs(false);
    setContactUs(false);
  };
  const handelClickBlogs = () => {
    setHome(false);
    setBlogs(true);
    setContactUs(false);
  };
  const handelClickContact = () => {
    setHome(false);
    setBlogs(false);
    setContactUs(true);
  };
  return (
    <div>
      <h1>Task1</h1>
      <ul>
        <li onClick={handelClickHome}> Home</li>
        <li onClick={handelClickBlogs}> Blogs</li>
        <li onClick={handelClickContact}> Contact</li>
      </ul>

      {home && <h2>Home</h2>}
      {blogs && <h2>blogs</h2>}
      {contactUs && <h2>contactUs</h2>}
    </div>
  );
}

export default Task1;
