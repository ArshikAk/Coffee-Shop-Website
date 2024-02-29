import './App.css';
import "./Styles/style.css"
import ReactDOM from "react-dom/client";
import Home from "./Pages/home.js"

function App() {
  return (
    <div className="App">
       {/* <BrowserRouter>
      <Routes>
         <Route element={<Home/>}></Route>
        <Route path='/Card' element={<Card/>}></Route>

      </Routes>
      </BrowserRouter>  */}
      <Home></Home>
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);