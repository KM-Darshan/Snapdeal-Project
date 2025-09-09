
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Ourblog from './pages/Ourblog';
import Sellonsnapdeal from './pages/Sellon';
import Downloadapp from './pages/Downloadapp';
import Helpcenter from './pages/Helpcenter';
import Side from './components/Slide';
import Carousel from './components/Carousell';
import Product from './components/Products';
import Nav from"./components/Navbar"
import Login from './pages/Login';
import Sublogin from './pages/Sublogin';
import AdsSection from './components/Ads';
import Footer from './components/Fotter';

// import Sigin from './pages/Signins';
// import Login from './pages/Login';

function App() {
  return (
    <>
    <BrowserRouter>
  
      <Nav/>
     
        <Routes>

  <Route path="/" element={
    <>
      <div className="main-layout">
        <Side />
      
       <Carousel/>
      </div>
    <Product/> 
    <AdsSection/>
   <Footer/>

    
    </>
  } />
      <Route path='/our' element={<Ourblog/>}/>
      <Route path='/sellon' element={<Sellonsnapdeal/>}/>
      <Route path='/download' element={<Downloadapp/>}/>
      <Route path='/helpcenter' element={<Helpcenter/>}/>
      {/* <Route path='/sigin' element={<Sigin/>}/> */}
      {/* <Route path='/sigin'element={<Sigin/>}/>
      <Route path='/login'element={<Login/>}/> */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/sublogin'element={<Sublogin/>}/>

    </Routes>
    
    </BrowserRouter>
    
    </>

  );
}

export default App;
