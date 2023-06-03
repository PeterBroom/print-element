import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom';
import './style.css';

import Home from './pages/Home';
import PrintableDoc from './pages/PrintableDoc';
import Test from './pages/Test';

function Layout() {
  return (
    <div className="container">
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/print">Print</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
      </ul> */}
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/print" element={<PrintableDoc />} />
          <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
