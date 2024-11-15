import styles from './App.module.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from "./components/Button/Button"
import { ButtonSection } from './components/Button/ButtonSection';
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from './pages/home/Home';
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Interests } from "./pages/Interests";
import { Layout } from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/about" element={<About/>}/> */}
          <Route path="/work" element={<Work/>}/>
          <Route path="/fun" element={<Interests/>}/>
        </Route>
      </Routes>
    </Router>


  )



}

export default App;
