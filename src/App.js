
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import  Dashboard  from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';




function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path = '/home' element = {<Home/>}   />
    //     <Route path = '/' element = {<Login/>} />

    //     <Route 
    //     path = '/dashboard'
    //     element = {
    //       <ProtectedRoute>
    //         <Dashboard/>  
    //       </ProtectedRoute>
    //     } />

    //   </Routes>
    // </Router>
    
  );
}

export default App;
