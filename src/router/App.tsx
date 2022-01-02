

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query';


import { Navbar } from '../components/Navbar';
import { Home } from '../pages/Home'
import { InvoiceDetail } from '../pages/InvoiceDetail'

function App() {

  const [Data, setInvNumber] = useState({})

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home setInvNumber={setInvNumber} />} />
            <Route path="InvoiceDetail" element={<InvoiceDetail data={Data} />} />
          </Routes>
        </>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
