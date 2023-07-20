import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ShoeList from './shoeList';
import HatList from './HatList';
import ShoeForm from './CreateShoeForm';
import Nav from './Nav';
import CreateHatForm from './CreateHatForm';
import CreateShoeForm from './CreateShoeForm';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path = "/shoes" element ={<ShoeList shoes={props.shoes}/>}/>
          <Route path = "/hats" element ={<HatList hats={props.hats}/>}/>
          <Route path = "/hats/form" element ={<CreateHatForm/>}/>
          <Route path = "/shoes/form" element ={<CreateShoeForm/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
