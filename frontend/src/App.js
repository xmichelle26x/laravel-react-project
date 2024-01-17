import './App.css';
import ShowProducts from './components/ShowProducts';
import UpdateProducts from './components/UpdateProducts'
import CreateProducts from './components/CreateProducts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowProducts /> } />
          <Route path='/create' element={<CreateProducts /> } />
          <Route path='/update/:id' element={<UpdateProducts /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
