import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import LoginEmpresa from './views/LoginEmpresa';
import PaginaPrincipal from './views/PaginaPrincipal';
import CuentasPrincipal from './views/CuentasPrincipal'; // Componente de Cuentas
import CuentaGestionar from './views/CuentaGestionar'; // Componente de Cuentas
import CuentaDetalle from './views/CuentaDetalle'; // Componente de CuentaDetalle (corrige el nombre)
import CuentasDetalleMovimientos from './views/CuentasDetalleMovimientos';
import TarjetasCreditoPrincipal from './views/TarjetasCreditoPrincipal';
import TarjetasCreditoDiferidos from './views/TarjetasCreditoDiferidos';
import TarjetasCreditoHistoriales from './views/TarjetasCreditoHistoriales';
import TarjetasCreditoBloqueos from './views/TarjetasCreditoBloqueos';
import TarjetasCreditoCupos from './views/TarjetasCreditoCupos';
import Password from './views/Password';
import Register from './views/Register';
import '@fortawesome/fontawesome-free/css/all.min.css'; //iconos
import CuentasGestionar from './views/CuentaGestionar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginEmpresa" element={<LoginEmpresa />} />
        <Route path="/password" element={<Password />} />
        <Route path="/register" element={<Register />} />
        <Route path="/PaginaPrincipal" element={<PaginaPrincipal />} />

        {/* Rutas de Cuentas */}
        <Route path="/cuentas/principal" element={<PrivateRoute component={CuentasPrincipal} />} />
        <Route path="/cuentas/gestionar" element={<PrivateRoute component={CuentasGestionar} />} />


        {/* Ruta para los detalles de cuenta */}
        <Route path="/cuentas/detalle" element={<PrivateRoute component={CuentaDetalle} />} />


        {/* Ruta para los detalles de los movimientos */}
        <Route path="/cuentas/detalle-movimientos" element={<PrivateRoute component={CuentasDetalleMovimientos} />} />

        {/* Rutas para Tarjetas de Crédito */}
        <Route path="/tarjetas-credito/principal" element={<PrivateRoute component={TarjetasCreditoPrincipal} />} />
        <Route path="/tarjetas-credito/diferidos" element={<PrivateRoute component={TarjetasCreditoDiferidos} />} />
        <Route path="/tarjetas-credito/historial" element={<PrivateRoute component={TarjetasCreditoHistoriales} />} />
        <Route path="/tarjetas-credito/bloqueos" element={<PrivateRoute component={TarjetasCreditoBloqueos} />} />
        <Route path="/tarjetas-credito/cupos" element={<PrivateRoute component={TarjetasCreditoCupos} />} />
      </Routes>
    </Router>
  );
};

// Componente PrivateRoute que verifica si el usuario está autenticado
const PrivateRoute = ({ component: Component }) => {
  const isAuthenticated = true; // Reemplaza esto con tu lógica real de autenticación
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default App;
