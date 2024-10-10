import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/createuser" element={<Signup/>}></Route>
        <Route exact path="/Login" element={<Login/>}></Route>
        <Route exact path="/myOrder" element={<MyOrder/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
