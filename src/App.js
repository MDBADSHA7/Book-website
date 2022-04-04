
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Copmonents/About/About';
import Blogs from './Copmonents/Blogs/Blogs';
import Dasboard from './Copmonents/Dasboard/Dasboard';
import Home from './Copmonents/Home/Home';
import Navbar from './Copmonents/Navbar/Navbar';
import NotFound from './Copmonents/NotFound/NotFound';
import Revews from './Copmonents/Revews/Revews';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/revews" element={<Revews></Revews>}></Route>
        <Route path="/dasboard" element={<Dasboard></Dasboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
