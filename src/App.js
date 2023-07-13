import './App.css';
import { Home } from './Pages/Home';
import Construction  from './Pages/Construction';
import { Navbar } from './Components/navbar';
import Gastronomie from './Pages/Gastronomie';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div clasName="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Aufbau" element={<Construction/>}/>
        <Route path="/Anfahrt" element={<Home/>}/>
        <Route path="/Preise" element={<Home/>}/>
        <Route path="/Gastronomie" element={<Gastronomie/>}/>
        <Route path="/Bootsverleih" element={<Home/>}/>
        <Route path="/Sauna" element={<Home/>}/>
        <Route path="/Übernachtung" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
     </div>
   
  );
}

export default App;
