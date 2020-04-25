import React from 'react'

interface Props {
  done: boolean
  id: number
  title: string
  desc: string
}

const Todo: React.FC<Props> = (props) => {
  const className = 'undone'
  const link = props.done ? 'もとに戻す' : '完了！'
  return (
    <li className={className}>
      <span>{props.id}</span>
      <span>{props.title}</span>
      <a href="#">{link}</a>
      <p>{props.desc}</p>
    </li>
  )
}

// class Todo extends React.Component<Props> {
//   render() {
//     const className = "undone";
//     const link = this.props.done ? "もとに戻す" : "完了！";
//     return (
//       <li className={className}>
//         <span>{this.props.id}</span>
//         <span>{this.props.title}</span>
//         <a href="#">{link}</a>
//         <p>{this.props.desc}</p>
//       </li>
//     );
//   }
// }

export default Todo
