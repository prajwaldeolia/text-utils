import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light"); //wheather darkmode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1600);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(4 32 65)";
      showAlert("Dark mode has been enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
    }
  };

  const guide = createBrowserRouter([
    {
      path: "/",
      element: (
        <Navbar
          title="Text-Utils"
          AboutText="About"
          Dropdown="Dropdown"
          Action="Do"
          AnotherAction="Do2"
          SomethingElseHere="otherAction"
          Disabled={false}
          mode={mode}
          toggleMode={toggleMode}
        />
      ),
      children: [
        // {
        //   path: "/",
        //   element: <Alert alert={alert} />,
        // },
        {
          path: "/form",
          element: (
            <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze."
              mode={mode}
            />
          ),
        },
        {
          path: "/about",
          element: <About mode={mode} />,
        },
      ],
    },
  ]);

  return (
    <>
      <Alert alert={alert} />
      <RouterProvider router={guide} />
    </>
  );
}
