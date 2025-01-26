import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ListaPersonas from './components/persona/ListaPersonas';
import FormularioPersona from './components/persona/FormularioPersona';
import ListaCuentas from './components/cuenta/ListaCuentas';
import FormularioCuenta from './components/cuenta/FormularioCuenta';
import Cuentas from './views/Cuentas';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Ruta raíz */}
        <Route path="/" element={<Navigate to="/personas" replace />} />

        {/* Rutas de Personas */}
        <Route path="/personas" element={<ListaPersonas />} />
        <Route path="/personas/nuevo" element={<FormularioPersona />} />
        <Route path="/personas/editar/:id" element={<FormularioPersona />} />

        {/* Rutas de Cuentas */}
        <Route path="/cuentas" element={<Cuentas />} />
        <Route path="/cuentas/lista" element={<ListaCuentas />} />
        <Route path="/cuentas/nuevo" element={<FormularioCuenta />} />
        <Route path="/cuentas/editar/:id" element={<FormularioCuenta />} />
      </Routes>
    </Router>
  );
}

export default App; 