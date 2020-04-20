import React from "react";
import Todo from "./Todo";

// const List = (todos) => {
//   return <div>これはリストです</div>;
// };

interface Props {
  todos: any[];
}
interface State {}

class List extends React.Component<Props, State> {
  render() {
    const todos = this.props.todos.map((todo) => (
      <Todo key={todo.id} {...todo} />
    ));
    return (
      <>
        <ul>{todos}</ul>
      </>
    );
  }
}

export default List;
