import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmployeeList from './components/EmployeeList/EmployeeList';
import MainForm from './components/AddEmployee/MainForm';
import EmpDetails from './components/ViewEmployee/EmpDetails';
import UpdateEmployee from './components/UpdateEmployee/UpdateEmployee';

function App() {
  return (
    <div className="App">
      <h1>Employee Management UI</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmployeeList/>}/>
          <Route path='/employee/create' element={<MainForm/>} />
          <Route path='/employee/detail/:employee_id' element={<EmpDetails/>} />
          <Route path='/employee/update/:employee_id' element={<UpdateEmployee/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
