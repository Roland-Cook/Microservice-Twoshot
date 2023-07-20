import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ShoeList from './shoeList';

import Nav from './Nav';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
      <Route path = "/shoes">
        <Route path = "" element ={<ShoeList shoes={props.shoes}/>}/>
      </Route>
      <Route path = "/hats">
        <Route path = "" element ={<ShoeList hats={props.hats}/>}/>
      </Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
