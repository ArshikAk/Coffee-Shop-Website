import './App.css';
import "./Styles/style.css"
import { Routes ,Route} from 'react-router-dom';
import Home from "./Pages/home.jsx"
import Card from "./Components/Card"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Card' element={<Card/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
