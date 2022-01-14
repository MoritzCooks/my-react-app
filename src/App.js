import './App.css';
import Todo from "./components/Todo";

function App() {
  return <div>
    <h1>My ToDos:</h1>
    <Todo title='React lernen'/>
    <Todo title='React können'/>
    <Todo title='Erste Aufgabe übernehmen'/>
  </div>;
}

export default App;
