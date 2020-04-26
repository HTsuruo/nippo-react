import React from 'react'
import Todo from '../components/Todo'
import { type } from 'os'

// interface Props {
//   todos: any[]
// }

type Props = {}

const Home: React.FC<Props> = (props) => {
  return <div>ほげほげ</div>
}

// Function Componentで実装する場合.
// const Home: React.FC<Props> = (props) => {
//   const todos = props.todos.map((todo) => <Todo key={todo.id} {...todo} />)
//   return (
//     <>
//       <ul>{todos}</ul>
//     </>
//   )
// }

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

export default Home
