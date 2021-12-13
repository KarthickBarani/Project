

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import { Navbar } from '../components/Navbar';
import { Home } from '../pages/Home'
import { InvoiceDetail } from '../pages/InvoiceDetail'

function App() {
  return (
    <Router>
      <div>
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
