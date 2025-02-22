import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './component/MyComponent';
import React from 'react';

class App extends React.Component {
  state = {
    Name:"Minh Tri",
    Age: 17
  }
  handleClick(event) {
    console.log("ban da click button")
    // console.log(event.target)
  }
  click(event) {
    console.log(event)
  }
  render() {
    return (
      <div>Đây là một component được thực hiện bằng class
        <MyComponent></MyComponent>
      </div>
      );
    }
}



// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello world
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

export default App;
