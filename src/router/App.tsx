

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';


import { Navbar } from '../components/Navbar';
import { Home } from '../pages/Home'
import { InvoiceDetail } from '../pages/InvoiceDetail'

function App() {

  const [Data, setData] = useState({})

  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setData={setData} />} />
          <Route path="InvoiceDetail" element={<InvoiceDetail data={Data} />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
