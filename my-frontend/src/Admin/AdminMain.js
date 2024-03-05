// import React from 'react';

// const Admin = () => {
//   return ( 
//   <h1>hello my world</h1>
//   );
// }

// export default Admin;






import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import User from './User/User';
import CreateUser from './User/CreateUser';
import UpdateUser from './User/UpdateUser';
import AdminNavbar from './AdminNavbar';


function Admin (){
  return (
    <div>
      
     {/* <AdminPlant /> */}
     <AdminNavbar />
     
      <Routes>
      {/* <Route path="/users" element={<User />} /> */}
      
      <Route path="/createUser" element={<CreateUser />} />
      <Route path="/user" element={<User />} />
      <Route path="/users/:id" element={<UpdateUser />} />
      
      
      
      
     </Routes>
    </div>
  );
};
export default Admin;
