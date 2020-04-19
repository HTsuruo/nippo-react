import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import List from "./components/List";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <List />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
