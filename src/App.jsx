import { useEffect, useRef, useState } from "react";
import "./App.css";
import Group from "./components/group/Group";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  // console.log(x.current);
  // useEffect(() => {
  //   if (!firstRender.current) {
  //     firstRender.current = true;
  //   } else {
  //     console.log("poxvec");
  //   }
  // }, [value]);

  // const handleScroll = () => {
  //   // console.log(y, "yyyyy");
  //   // setY((prev) => prev + 1);
  //   console.log(z.current);
  //   z.current += 1;
  // };

  // useEffect(() => {
  //   // document.addEventListener("scroll", handleScroll);
  //   // return () => {
  //   //   document.removeEventListener("scroll", handleScroll);
  //   // };
  // });

  // useEffect(() => {
  //   console.log(value);
  // }, [value]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/barev" element={<h1>Barev</h1>} />
        <Route path="/a/about/barev" element={<h1>a Barev</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <h1>Router</h1>
      <button
        onClick={() => {
          if (value.trim()) {
            if (inputRef.current.style.border.includes("red")) {
              inputRef.current.style.border = "solid";
            }
          } else {
            inputRef.current.style.border = "solid red";
          }
          x.current += 1;
        }}
      >
        Click
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Group ref={inputRef} x={100} /> */}
    </div>
  );
}

export default App;
