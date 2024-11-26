import Login from "./Pages/login/Login"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <main>
      <Routes>
          {/* Add more neccesary  Routes*/}
    <Route path="/login" element={<Login/>} />

</Routes>
    </main>
    </BrowserRouter>
     </>
  )
}

export default App
