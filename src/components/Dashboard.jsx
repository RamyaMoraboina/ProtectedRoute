import React from 'react';
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {  // implement logout in dashboard

    const navigate = useNavigate();

    const handleLogout = () =>{
        localStorage.removeItem('authToken');
        navigate('/login')
    }
  return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={handleLogout} >Logout</button>
    </div>
  )
}
export default Dashboard;
