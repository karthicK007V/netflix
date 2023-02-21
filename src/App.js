
import './App.css';
import Movie from './page/Movie';

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './page/Home';
import Signin from './page/signin';
import Signup from './page/signup';



function App() {
 




 

  return (
    <div className="">
    <BrowserRouter>

   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/sign' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    {/* <Navbar/>
     <Banner/>
     <Movie/> */}
  
    </BrowserRouter>
   
    
    </div>
  );
}

export default App;
