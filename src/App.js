
import './App.css';
import Create from './component/Create';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Read from './component/Read';
import Update from './component/update';

function App() {
  return (
   <>
   <div className='container mt-5'>
   <BrowserRouter>
   <Routes>
    
    <Route exact path='/' element={<Create/>}/>
    <Route exact path="/read" element={<Read/>}/>
    <Route exact path="/update" element={<Update/>}/>
    
   
  
   </Routes>
   </BrowserRouter>
   </div>
   </>
  );
}

export default App;
