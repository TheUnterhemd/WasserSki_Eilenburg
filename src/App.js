import './App.css';
import { Home } from './Pages/Home';
import { Navbar } from './Components/navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div clasName="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Aufabu" element={<Home/>}/>
        <Route path="/Anfahrt" element={<Home/>}/>
        <Route path="/Preise" element={<Home/>}/>
        <Route path="/Gastronomie" element={<Home/>}/>
        <Route path="/Bootsverleih" element={<Home/>}/>
        <Route path="/Sauna" element={<Home/>}/>
        <Route path="/Übernachtung" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
     </div>
   
  );
}

export default App;
