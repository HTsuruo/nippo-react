import React from "react";
import "./App.css";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import List from "./components/List";

interface Props {
  todos?: List;
}
interface State {}

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: [
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
      ],
    };
  }
  render() {
    return (
      <div>
        <Nav />
        <h1>TODOアプリ作ってみた</h1>
        <List todos={this.props.todos} />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
