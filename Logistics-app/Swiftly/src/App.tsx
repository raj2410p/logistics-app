import Login from "./Pages/login/Login"
import Landing from "./Pages/landing";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <main>
      <Routes>
          {/* Add more neccesary  Routes*/}
    <Route path="/login" element={<Login/>} />
    <Route path="/" element={<Landing/>} />

</Routes>
    </main>
    </BrowserRouter>
     </>
  )
}

export default App
