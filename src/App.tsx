import React, { useState, useEffect, Fragment } from 'react'
import './App.css'
import Form from './components/Form'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import User from './pages/User'
import Home from './pages/Home'
import Profile from './pages/Profile'

type Props = {}
// function componentで記述する
const App: React.FC<Props> = (props) => {
  return (
    <Router>
      <div>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">SignIn</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </Nav>
        <Switch>
          <Route path="/users">
            <User />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

// const [count, setCount] = useState(0)
// const [inputVal, setInputVal] = useState('')
// const [todos, setTodos] = useState([''])

// const todosNode = todos.map((todo, idx) => {
//   return <li key={idx}>{todo}</li>
// })

// const onsubmit = () => {
//   setTodos((prev) => prev.concat(inputVal))
//   setInputVal('')
// }

// const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setInputVal(e.target.value)
// }

// const increment = () => {
//   setCount(count + 1)
// }

// const decrement = () => {
//   setCount(count - 1)
// }

// <div>
//   <h1>TODOアプリ作ってみた</h1>
//   {/* <form action="" onSubmit={() => onsubmit()}> */}
//   <p>{inputVal}</p>
//   <input type="text" value={inputVal} onChange={(e) => onchange(e)} />
//   {/* <input type="submit" value="送信" /> */}
//   <button onClick={onsubmit}>送信ボタン</button>
//   {/*  </form> */}
//   <ul>{todosNode}</ul>

//   <h1>ただのカウンター</h1>
//   <div>you clicked {count} times</div>
//   <button onClick={() => increment()}>プラス</button>
//   <button onClick={() => decrement()}>マイナス</button>
// </div>

// class component
// class App extends React.Component<Props, State> {
//   constructor(props: any) {
//     super(props);
//     const todos = [
//       {
//         id: 1,
//         title: "Hello, React!",
//         desc: "React始めました",
//         done: false,
//       },
//       {
//         id: 2,
//         title: "Hello, Redux!",
//         desc: "Reduxも始めました",
//         done: false,
//       },
//     ];
//     this.state = {
//       todos: todos,
//       countTodo: todos.length + 1,
//       count: 0
//     };
//   }

//   plus() {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   minus() {
//     this.setState({
//       count: this.state.count - 1
//     })
//   }

//   render() {
//     return (
//       <div>
//         <Nav />
//         <h1>TODOアプリ作ってみた</h1>
//         {/* <Form /> */}
//         <div>count is : {this.state.count}</div>
//         <button onClick={() => this.plus()}>プラス</button>
//         <button onClick={() => this.minus()}>マイナス</button>
//         <List todos={this.state.todos} />
//         <Footer />
//       </div>
//     );
//   }
// }

export default App
