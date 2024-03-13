import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Design from './Components/Design/Design';
import Home from './Components/Home/Home';

function App() {

  return (
    <>
    <div className='Body'>
    <Router>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path="/Design" element={<Design/> } />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
