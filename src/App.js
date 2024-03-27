import './App.css';
import "./Styles/style.css"
import ReactDOM from "react-dom/client";
import Home from './Pages/home';

function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);