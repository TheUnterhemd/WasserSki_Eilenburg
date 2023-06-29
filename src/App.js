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
      </Routes>
      </BrowserRouter>
     </div>
   
  );
}

export default App;
