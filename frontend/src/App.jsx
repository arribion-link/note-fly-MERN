import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Create from './pages/Create';
import Header from './components/Header';
import toast, { Toaster } from "react-hot-toast";
// import RateLimitUI from './components/RateLimitUI';

function App() {
  const notify = ()=>{
    toast.success('CONGRANT')
  }
  return (
    <>
      <Header />
     
      <div>
        <button onClick={notify}>click me</button>
        <Toaster/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/note/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App
