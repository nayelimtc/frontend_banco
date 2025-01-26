import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PaginaPrincipal.css";
import "../styles/Cuentas.css";

const CuentaDetalle = () => {
  const navigate = useNavigate();

  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");
  const [tipoVisualizacion, setTipoVisualizacion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const historialMovimientos = [
    {
      fecha: "05 diciembre 2024 - 11:35:25 pm",
      monto: "-45.55",
      saldoDisponible: "100.00",
      descripcion: "Compra San Luis",
    },
    {
      fecha: "06 diciembre 2024 - 02:15:10 pm",
      monto: "-25.00",
      saldoDisponible: "75.00",
      descripcion: "Pago de servicio",
    },
    {
        fecha: "05 diciembre 2024 - 11:35:25 pm",
        monto: "-45.55",
        saldoDisponible: "100.00",
        descripcion: "Compra San Luis",
      },
      {
        fecha: "05 diciembre 2024 - 11:35:25 pm",
        monto: "-45.55",
        saldoDisponible: "100.00",
        descripcion: "Compra San Luis",
      },
      {
        fecha: "05 diciembre 2024 - 11:35:25 pm",
        monto: "-45.55",
        saldoDisponible: "100.00",
        descripcion: "Compra San Luis",
      },
      {
        fecha: "05 diciembre 2024 - 11:35:25 pm",
        monto: "-45.55",
        saldoDisponible: "100.00",
        descripcion: "Compra San Luis",
      },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="profile-image"
        />
        <h2>Juanito Estupiñan</h2>
        <p>Último ingreso: 11-15-2024 10:03:44</p>
        <button onClick={() => navigate("/cuentas")}>Cuentas</button>
        <button onClick={() => navigate("/tarjetas-credito/principal")}>
          Tarjetas de Crédito
        </button>

        <hr className="sidebar-divider" />
        <button className="logout-button" onClick={() => navigate("/login")}>
          Cerrar sesión
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1>Cuentas</h1>
          <div className="user-info">
            <p>
              <strong>Juanito Estupiñán</strong> Último ingreso: 11-15-2024
              10:03:44
            </p>
          </div>
        </div>

        {/* Detalles de la cuenta */}
        <div className="detalle-container">
          <div className="header">
            <button
              className="back-button"
              onClick={() => navigate("/cuentas")}
            >
              Regresar
            </button>
            <h1>Administrar tu cuenta</h1>
          </div>

          <div className="cuenta-detalles">
            <h2>Cuenta de ahorro</h2>
            <div className="account-info">
              <img
                src="https://via.placeholder.com/80"
                alt="Cuenta"
                className="account-image"
              />
              <p>Número: 20333000011190</p>
              <p>Saldo disponible: $5,000.00</p>
              <p>Saldo por efectivizar: $1,000.00</p>
            </div>
          </div>

          <div className="acciones-rapidas">
            <h3>Acciones rápidas</h3>
            <div className="acciones-rapidas-menu">
              <div className="action-item">
                <button>Obtener certificado</button>
              </div>
              <div className="action-item">
                <button>Estado de cuenta</button>
              </div>
            </div>
          </div>

          <div className="movimientos-detalle">
            <h3>Detalles de movimientos</h3>
            <div className="fecha-selector">
              <label>Fecha desde:</label>
              <input
                type="date"
                value={fechaDesde}
                onChange={(e) => setFechaDesde(e.target.value)}
              />
              <label>Fecha hasta:</label>
              <input
                type="date"
                value={fechaHasta}
                onChange={(e) => setFechaHasta(e.target.value)}
              />
            </div>
            <div className="tipo-visualizacion">
              <label>Tipo de visualización:</label>
              <select
                value={tipoVisualizacion}
                onChange={(e) => setTipoVisualizacion(e.target.value)}
              >
                <option value="">Seleccionar</option>
                <option value="todos">Todos</option>
                <option value="ingresos">Ingresos</option>
                <option value="egresos">Egresos</option>
              </select>
            </div>
            <div className="busqueda">
              <input
                type="text"
                placeholder="Buscar por palabra"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="botones-busqueda">
                <button>TODOS</button>
                <button>INGRESOS</button>
                <button>EGRESOS</button>
              </div>
            </div>
          </div>

          <div className="historial-transferencias">
  <h3>Historial de movimientos</h3>
  <div className="historial-container">
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Descripción</th>
          <th>Monto</th>
          <th>Saldo disponible</th>
        </tr>
      </thead>
      <tbody>
        {historialMovimientos.map((movimiento, index) => (
          <tr key={index}>
            <td>{movimiento.fecha}</td>
            <td>{movimiento.descripcion}</td>
            <td>{movimiento.monto}</td>
            <td>{movimiento.saldoDisponible}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default CuentaDetalle;
