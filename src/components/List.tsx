import React from "react";
import Todo from "./Todo";

interface Props {
  todos: any[];
}

// Function Componentで実装する場合.
const List: React.FC<Props> = (props) => {
  const todos = props.todos.map((todo) => <Todo key={todo.id} {...todo} />);
  return (
    <>
      <ul>{todos}</ul>
    </>
  );
};

// Class Componentで実装する場合.
// interface Props {
//   todos: any[];
// }
// interface State {}

// class List extends React.Component<Props, State> {
//   render() {
//     const todos = this.props.todos.map((todo) => (
//       <Todo key={todo.id} {...todo} />
//     ));
//     return (
//       <>
//         <ul>{todos}</ul>
//       </>
//     );
//   }
// }

export default List;
