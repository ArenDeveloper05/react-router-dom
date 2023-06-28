import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <header
        style={{
          height: "100px",
          backgroundColor: "tomato",
        }}
      >
        <h1>Header</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
            {/* <a href="/about">About</a> */}
          </li>
          <li>
            <Link to="/about/barev">About Barev</Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
      <footer
        style={{
          height: "200px",
          backgroundColor: "blue",
        }}
      >
        <h1>Footer</h1>
      </footer>
    </>
  );
};

export default Layout;
