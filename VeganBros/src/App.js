
import './App.css';

import Home from './Home';
import Login from './Login';


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {



  
  return (
    <div className="App">


<BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<Login />} />
          
        
      </Routes>
    </BrowserRouter>




      
      




    </div>

    
  );
}





export default App;
