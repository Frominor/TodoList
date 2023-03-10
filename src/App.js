import { Route,Routes } from 'react-router-dom';
import './App.css';
import LinkButton from './ReUseComponents/Buttons/LinkButton';
import notebook from './notebook.png'
import completed from './correct.png' 
import notcompleted from './notcompleted.png'
import TodosPage from './ReUseComponents/TodosPage/TodosPage';
import { useSelector } from 'react-redux';
function App() {
  const State=useSelector(state=>state.TodoReducer)
  console.log(State)
  return (
    <div className="App">
     <div className='container'>
      <div className='container_header header'>
        <h1 className='container_header_zagolovok'>My Todo List-{'All tasks'}</h1>
      </div>
      <div className='container_main'>
        <div className='LeftSide'>
          <LinkButton img={notebook} LinkTo={'All tasks'} to={'/'}></LinkButton>
          <LinkButton img={completed}  LinkTo={'Done Todos'} to={'donetodos'}></LinkButton>
          <LinkButton img={notcompleted} LinkTo={'Not Done'} to={'notdonetodos'}></LinkButton>
        </div>
        <Routes>
          <Route index element={<TodosPage Todos={State.AllTodos}></TodosPage>}></Route>
          <Route path={'donetodos'} element={<TodosPage Todos={State.DoneTodos}></TodosPage>}></Route>
          <Route path={'notdonetodos'} element={<TodosPage Todos={State.NotDoneTodos}></TodosPage>}></Route>
        </Routes>
      </div>
     </div>
    </div>
  );
}

export default App;
