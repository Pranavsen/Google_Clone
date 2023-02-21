import './App.css';
import Home from './pages/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/search" element={<SearchPage/>} />
  </Routes>
    </div>
  );
}

export default App;
