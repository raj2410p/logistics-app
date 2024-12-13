import Login from "./Pages/login/Login"
import Landing from "./Pages/Landing/Landing";
import Signup from "./Pages/login/Signup";
import Admin from "./Pages/dashboards/Admin/Admin";
import Customer from "./Pages/dashboards/Customer";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            {/* Add more neccesary  Routes*/}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/Customer" element={<Customer />} />
           
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
