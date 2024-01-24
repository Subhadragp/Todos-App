import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
// import {ToDoItem} from './Components/ToDoItem';
import {ToDos} from './Components/ToDos';
import {Footer} from './Components/Footer';

function App() {
  return (
    <>
    <Header/>
    {/* <ToDoItem/> */}
    <ToDos/>
    <Footer/>
    </>
  );
}

export default App;
