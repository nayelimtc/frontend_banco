import axios from "axios";

const API_BASE_URL = "/personas"; // Base URL para las rutas de personas

// Listar todas las personas
export const listarPersonas = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.mensaje || "Error al listar personas");
  }
};

// Mostrar detalles de una persona por ID
export const mostrarPersona = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.mensaje || "Error al mostrar la persona");
  }
};

// Crear una nueva persona
export const crearPersona = async (personaData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`, personaData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.mensaje || "Error al crear la persona");
  }
};

// Actualizar una persona existente
export const actualizarPersona = async (id, personaData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, personaData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.mensaje || "Error al actualizar la persona");
  }
};

// Eliminar una persona
export const eliminarPersona = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.mensaje || "Error al eliminar la persona");
  }
}; 