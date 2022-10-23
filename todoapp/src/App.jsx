import './App.css';
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <div className='App'>
      <h1 className='title'>
        Todo App <span className='Logo-X'>X</span> Jefferson
      </h1>
      <ListaTareas />
    </div>
  );
}

export default App;
