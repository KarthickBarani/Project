import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import { Navbar } from './components/Navbar';
import { Home } from './components/Home'
import InvoiceDetail from './components/InvoiceDetail'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="InvoiceDetail" element={<InvoiceDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
