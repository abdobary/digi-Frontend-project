import { Form, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import { Header } from './shared/Header';
import { NavBar } from './shared/NavBar';
import './styles/global.css'

import { Footer } from './shared/Footer';
import { Router } from './Router/Router';
function App() {
  return (
    <>
      <RouterProvider router={Router}/>
    </>
  );
}

export default App;