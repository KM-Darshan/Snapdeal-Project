
import './App.css';
// import Nav from './components/Nav';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Ourblog from './pages/Ourblog';
import Sellonsnapdeal from './pages/Sellon';
import Downloadapp from './pages/Downloadapp';
import Helpcenter from './pages/Helpcenter';
// import Carousel from './components/Carousel';
import Side from './components/Slide';
// import Product from './components/Product';

import Carousel from './components/Carousell';
import Product from './components/Products';
import Nav from"./components/Navbar"
function App() {
  return (
    <>
    <BrowserRouter>
  
<Nav/>
     {/* <div className='main-layout'>
        <Side/>
           <Carousel/>
        </div>
        <Product/>
    */}
   
        <Routes>

  <Route path="/" element={
    <>
      <div className="main-layout">
        <Side />
      
       <Carousel/>
      </div>
    <Product/> 
    
    </>
  } />


            
      <Route path='/our' element={<Ourblog/>}/>
      <Route path='/sellon' element={<Sellonsnapdeal/>}/>
      <Route path='/download' element={<Downloadapp/>}/>
      <Route path='/helpcenter' element={<Helpcenter/>}/>
    </Routes>
    
    </BrowserRouter>
    
    </>

  );
}

export default App;
