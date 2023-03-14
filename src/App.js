import { Route,Routes } from 'react-router-dom';
import './App.css';
import LinkButton from './ReUseComponents/Buttons/LinkButton';
import notebook from './notebook.png'
import completed from './correct.png' 
import { useRef } from 'react';
import { CSSTransition } from "react-transition-group"
import { useDispatch, useSelector } from 'react-redux';
import AddTodoPopUp from './ReUseComponents/AddTodoPopUp/AddTodoPopUp';
import AllTodos from './Components/Todos/AllTodos/AllTodos';
import DoneTodos from './Components/Todos/DoneTodos/DoneTodos';
function App() {
  const dispatch=useDispatch()
  const State=useSelector(state=>state.TodoReducer)
   const ref=useRef(null)
  return (
    <div className="App">
     <div className='container'>
      <div className='container_header header'>
        <h1 className='container_header_zagolovok'>My Todo List-{'All tasks'}</h1>
      </div>
      <CSSTransition ref={ref} in={State.AddTodoPopUpActive} mountOnEnter unmountOnExit timeout={600} classNames='my-node'>
         <AddTodoPopUp dispatch={dispatch} State={State}></AddTodoPopUp>
      </CSSTransition>
      <div className='container_main'>
        <div className='LeftSide'>
          <LinkButton img={notebook} LinkTo={'All tasks'} to={'/'} ></LinkButton>
          <LinkButton img={completed}  LinkTo={'Done Todos'} to={'donetodos'} ></LinkButton>
        </div>
        <Routes>
          <Route index element={<AllTodos State={State}></AllTodos>}></Route>
          <Route path='donetodos' element={<DoneTodos State={State}></DoneTodos>}></Route>
        </Routes>
      </div>
     </div>
    </div>
  );
}

export default App;
