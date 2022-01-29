import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App;
