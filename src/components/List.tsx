import React from "react";

// const List = (todos) => {
//   return <div>これはリストです</div>;
// };

interface Props {
  todos?: List;
}
interface State {}

class List extends React.Component<Props, State> {
  render() {
    const todos = this.props.todos;
    return (
      <>
        <ul>{todos}</ul>
      </>
    );
  }
}

export default List;
