import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cuentas.css";
import "../styles/TarjetaCredito.css";

const CuentasGestionar = () => {
  const navigate = useNavigate();

  const [cuentas, setCuentas] = useState([
    { id: 1, numeroCuenta: "1234-5678-9012", titular: "Juan Pérez", saldo: 5000.0, fechaCreacion: "20/02/2025", tipo: "Ahorros", estado: "Activo" },
    { id: 2, numeroCuenta: "9876-5432-1098", titular: "María García", saldo: 10000.0, fechaCreacion: "21/02/2025", tipo: "Corriente", estado: "Activo" },
    { id: 3, numeroCuenta: "5555-6666-7777", titular: "Tom Olden", saldo: 599.0, fechaCreacion: "22/02/2025", tipo: "Corriente", estado: "Activo" },
  ]);

  const [nuevaCuenta, setNuevaCuenta] = useState({
    numeroCuenta: "",
    titular: "",
    saldo: "",
    fechaCreacion: "",
    tipo: "",
    estado: "",
  });

  const [cuentaEditando, setCuentaEditando] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevaCuenta((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que el saldo sea un número válido
    const saldoNumerico = parseFloat(nuevaCuenta.saldo);
    if (isNaN(saldoNumerico)) {
      alert("Por favor, ingresa un saldo válido.");
      return;
    }

    if (cuentaEditando) {
      // Actualizar cuenta existente
      setCuentas(
        cuentas.map((cuenta) =>
          cuenta.id === cuentaEditando.id ? { ...cuenta, ...nuevaCuenta, saldo: saldoNumerico } : cuenta
        )
      );
    } else {
      // Crear nueva cuenta
      const nuevaCuentaConId = {
        ...nuevaCuenta,
        id: cuentas.length + 1,
        saldo: saldoNumerico,
      };
      setCuentas([...cuentas, nuevaCuentaConId]);
    }

    // Limpiar formulario y cerrar modal
    setNuevaCuenta({
      numeroCuenta: "",
      titular: "",
      saldo: "",
      fechaCreacion: "",
      tipo: "",
      estado: "",
    });
    setCuentaEditando(null);
    setMostrarModal(false);
  };

  const handleEdit = (cuenta) => {
    setCuentaEditando(cuenta);
    setNuevaCuenta(cuenta);
    setMostrarModal(true);
  };

  const handleDelete = (id) => {
    setCuentas(cuentas.filter((cuenta) => cuenta.id !== id));
  };

  const abrirModalNuevaCuenta = () => {
    setCuentaEditando(null);
    setNuevaCuenta({
      numeroCuenta: "",
      titular: "",
      saldo: "",
      fechaCreacion: "",
      tipo: "",
      estado: "",
    });
    setMostrarModal(true);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <img src="https://via.placeholder.com/80" alt="Profile" className="profile-image" />
        <h2>Juanito Estupiñan</h2>
        <p>Último ingreso: 11-15-2024 10:03:44</p>
        <button onClick={() => navigate("/cuentas/principal")}>Cuentas</button>
        <button onClick={() => navigate("/tarjetas-credito/principal")}>Tarjetas de Crédito</button>
        <hr className="sidebar-divider" />
        <button className="logout-button" onClick={() => navigate("/login")}>Cerrar sesión</button>
      </div>

      {/* Main */}
      <div className="main-content">
        <div className="header">
          <h1>Gestión de Cuentas</h1>
          <button onClick={abrirModalNuevaCuenta} className="action-button">+ Nueva Cuenta</button>
        </div>

        <div className="accounts-list">
          {cuentas.map((cuenta) => (
            <div key={cuenta.id} className="card">
              <p>Numero: {cuenta.numeroCuenta}</p>
              <p>Titular: {cuenta.titular}</p>
              <p>Saldo: ${parseFloat(cuenta.saldo).toFixed(2)}</p>
              <p>Fecha de Creación: {cuenta.fechaCreacion}</p>
              <p>Tipo: {cuenta.tipo}</p>
              <p>Estado: {cuenta.estado}</p>
              <button onClick={() => handleEdit(cuenta)} className="action-button">Editar</button>
              <button onClick={() => handleDelete(cuenta.id)} className="action-button">Eliminar</button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {mostrarModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{cuentaEditando ? "Editar Cuenta" : "Nueva Cuenta"}</h2>
            <form onSubmit={handleSubmit}>
              <div> 
              <p>Numero de cuenta</p>
              <input name="numeroCuenta" placeholder="Número de cuenta" value={nuevaCuenta.numeroCuenta} onChange={handleInputChange} required />
              </div>
              <div> 
              <p>Titular de la cuenta</p>
              <input name="titular" placeholder="Titular" value={nuevaCuenta.titular} onChange={handleInputChange} required />
              </div>
              <div> 
              <p>Saldo de la cuenta</p>              
              <input name="saldo" type="number" placeholder="Saldo" value={nuevaCuenta.saldo} onChange={handleInputChange} required />
              </div>
              <div> 
              <p>Fecha de Creación</p>  
              <input name="fechaCreacion" placeholder="Fecha de Creación" value={nuevaCuenta.fechaCreacion} onChange={handleInputChange} required />
              </div>
              <div> 
              <p>Tipo de Cuenta</p>  
              <input name="tipo" placeholder="Tipo de Cuenta" value={nuevaCuenta.tipo} onChange={handleInputChange} required />
              </div>        
              <div> 
              <p>Estado de la Cuenta</p>       
              <input name="estado" placeholder="Estado" value={nuevaCuenta.estado} onChange={handleInputChange} required />
              </div>              
              <div className="modal-buttons">
                <button type="submit" className="action-button">{cuentaEditando ? "Actualizar" : "Crear"}</button>
                <button type="button" className="action-button" onClick={() => setMostrarModal(false)}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CuentasGestionar;
