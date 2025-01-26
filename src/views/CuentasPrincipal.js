import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cuentas.css";

const CuentasPrincipal = () => {
  const navigate = useNavigate();
  const [cuentas, setCuentas] = useState([]); // Estado para almacenar cuentas
  const [isLoading, setIsLoading] = useState(true); // Estado para la carga

  useEffect(() => {
    const fetchCuentas = async () => {
      try {
        // Simulación de una llamada a un servicio (puedes reemplazarlo por un API real)
        const data = [
          { id: 1, numeroCuenta: "1234-5678-9012", titular: "Juan Pérez", saldo: 5000.0, fechaCreacion: "22/02/2025", tipo: "Corriente", estado: "Activo"},
          { id: 2, numeroCuenta: "9876-5432-1098", titular: "María García", saldo: 10000.0, fechaCreacion: "22/02/2025", tipo: "Ahorros", estado: "Activo"},
          { id: 3, numeroCuenta: "5555-6666-7777", titular: "Tom Olden", saldo: 599.0, fechaCreacion: "22/02/2025", tipo: "Transaccional", estado: "Activo"},
        ];
        setCuentas(data);
      } catch (error) {
        console.error("Error al cargar las cuentas:", error);
        alert("Error al cargar las cuentas. Intenta nuevamente.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCuentas();
  }, []);

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
        <button onClick={() => navigate("/cuentas/principal")}>Cuentas</button>
        <button onClick={() => navigate("/tarjetas-credito/principal")}>
          Tarjetas de Crédito
        </button>
        <hr className="sidebar-divider" />
        <button className="logout-button" onClick={() => navigate("/")}>
          Cerrar sesión
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1>Administración de Cuentas</h1>
          <div className="user-info">
            <p>
              <strong>Juanito Estupiñan</strong> Último ingreso: 11-15-2024
              10:03:44
            </p>
          </div>
        </div>

        {/* Cuentas List */}
        <div className="main-content">
        <button
            className="cuentas-gestionar-button"
            style={{ marginBottom: "1rem" }}
            onClick={() => navigate("/cuentas/gestionar")}
          >
            Gestionar Cuentas
          </button>

        {isLoading ? (
          <p>Cargando cuentas...</p>
        ) : cuentas.length > 0 ? (
          <div className="accounts-list">
            {cuentas.map((cuenta) => (
              <div key={cuenta.id} className="card">
                <p>Numero:{cuenta.numeroCuenta}</p>
                <p>Titular: {cuenta.titular}</p>
                <p>Saldo: ${cuenta.saldo.toFixed(2)}</p>
                <p>Tipo: {cuenta.tipo}</p>
                <p>Estado: {cuenta.estado}</p>
                <p>Fecha Creacion: {cuenta.fechaCreacion}</p>

              </div>
            ))}
          </div>
        ) : (
          <p>No hay cuentas disponibles.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default CuentasPrincipal;
