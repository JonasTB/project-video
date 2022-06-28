import { BrowserRouter, Routes } from 'react-router-dom';
import List from '../pages/List';
import Create from '../pages/Create';
import Login from '../pages/Login';

import '../styles/styles.css'
import { ToastContainer } from 'react-toastify';
import Route from './Route';

const RoutesApp = () => {
  return (
    <BrowserRouter>
    <ToastContainer autoClose={4000} position="top-right" />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/videos" element={<List />} />
      <Route path="/create" element={<Create />} />
    </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;