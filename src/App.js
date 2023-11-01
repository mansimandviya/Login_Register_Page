import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';
import Logout from './component/Logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/logout' element={<Logout/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
