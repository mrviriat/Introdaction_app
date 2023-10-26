// import React from 'react';
// import { Router, Routes, Route } from 'react-router-dom';
// import Login from './added/Login';
// import UserForm from './added/UserForm';
// import AdminPanel from './added/AdminPanel';

// function App() {
//   return (
//     <Router>
//       <div>   
//         <b>Hello</b>     
//         <Routes>
//           <Route path='/login' element={<Login/>} />
//           <Route path='/userForm' element={<UserForm/>} />
//           <Route path='/adminPanel' element={<AdminPanel/>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import  {Homepage}  from './pages/Homepage';
import  {Aboutpage}  from './pages/Aboutpage';
import  Auth  from './pages/Auth';

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home/:_email" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App