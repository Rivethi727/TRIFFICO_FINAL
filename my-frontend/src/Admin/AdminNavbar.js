import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




function AdminDashboard() {
  return (
    <div className="wrapper">
      <nav id="sidebar">
        <div className="sidebar-header">
       
          <h3>nivetha</h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <Link to="/admin/user">
               User
            </Link>
          </li>
          <li>
            
          </li>
          <li>
            
          </li>
          <li>
           
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default AdminDashboard;