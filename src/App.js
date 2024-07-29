import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddUser from './users/AddUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/addUserRoute' element={<AddUser/>}></Route>
            <Route exact path='/editUserRoute' element={<EditUser/>}></Route>
            <Route exact path='/viewUserRoute' element={<ViewUser/>}></Route>
          </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
