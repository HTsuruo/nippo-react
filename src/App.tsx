import React from "react";
import "./App.css";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import List from "./components/List";

interface Props {}
interface State {
  todos: any[];
  countTodo: number;
}

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    const todos = [
      {
        id: 1,
        title: "Hello, React!",
        desc: "React始めました",
        done: false,
      },
      {
        id: 2,
        title: "Hello, Redux!",
        desc: "Reduxも始めました",
        done: false,
      },
    ];
    this.state = {
      todos: todos,
      countTodo: todos.length + 1,
    };
  }

  render() {
    return (
      <div>
        <Nav />
        <h1>TODOアプリ作ってみた</h1>
        <Form />
        <List todos={this.state.todos} />
        <Footer />
      </div>
    );
  }
}

export default App;
