import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Create from './pages/Create';
import Header from './components/Header';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
}

export default App
