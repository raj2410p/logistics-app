import Login from "./Pages/login/Login"
import Landing from "./Pages/Landing/Landing";
import Signup from "./Pages/login/Signup";
import Admin from "./Pages/dashboards/Admin/Admin";

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
           
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
