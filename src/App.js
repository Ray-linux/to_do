import './App.css';
import Control from './components/controlBox/Control';
import Todos from './components/todos/Todos';

function App() {
  let tasks = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "you need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "you need to go to the mall to get this job done"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "you need to go to the ghat to get this job done"
    }
  ]
  return (
    <div className="container">
      <Control/>
    <Todos tasks={tasks}/>
    </div>
  );
}

export default App;
