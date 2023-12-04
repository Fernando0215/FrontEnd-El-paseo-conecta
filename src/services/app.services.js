import axios from "axios";

const BASE_URL = "https://red-lucky-cuttlefish.cyclic.app/api/v1/";

export const createProducto = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/productos`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Error al realizar la petición:', error);
      throw new Error("Error occurred while creating the product. Please try again.");
    }
  };

  export const updateProducto = async (productoId, formData) => {
    try {
      const response = await axios.put(`${BASE_URL}/productos/${productoId}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Error al realizar la petición:', error);
      throw new Error("Error occurred while updating the product. Please try again.");
    }
  };

  export const getProductos = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/productos`);
      // console.log(response); // DEBUG
  
      if (response.status === 200) return response.data.data;
      else return [];
    } catch (error) {
      console.log("Error:", error.message);
      return [];
    }
  };

  export const getOneProducto = async (productoId) => {
    try {
      if (!productoId) throw new Error("productoId is required!");
  
      const response = await axios.get(`${BASE_URL}/productos/${productoId}`);
      // console.log(response);
  
      if (response.status === 200) return response.data.data;
      else return undefined;
    } catch (error) {
      console.log("Error:", error.message);
      return undefined;
    }
  };

  export const reactToProducto = async (productoId) => {
    try {
      if (!productoId) throw new Error("productoId is required!");
  
      const response = await axios.patch(
        `${BASE_URL}/productos/favorite/${productoId}`
      );
      // console.log(response);
  
      if (response.status === 200) return true;
      else return undefined;
    } catch (error) {
      console.log("Error:", error.message);
      return undefined;
    }
  };

  export const deleteOneProducto = async (productoId) => {
    try {
      if (!productoId) throw new Error("productoId is required!");
  
      const response = await axios.delete(
        `${BASE_URL}/productos/${productoId}`
      );
      // console.log(response);
  
      if (response.status === 200) return true;
      else return undefined;
    } catch (error) {
      console.log("Error:", error.message);
      return undefined;
    }
  };

  export const createEmprendimiento = async (formData) => {
    try {
  
      // Si no hay duplicados, crea el nuevo emprendimiento
      const response = await axios.post(`${BASE_URL}/emprendimientos`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response from server:', response.data);
  
      return response.data;
    } catch (error) {
      console.error('Error al realizar la petición:', error);
      if (error.status === 409) {
        // Propaga el error de conflicto
        throw error;
      } else {
        throw new Error("Error occurred while creating the entrepreneurship. Please try again.");
      }
    }
  };
  

  export const getEmprendimiento = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/emprendimientos`);
      // console.log(response); // DEBUG
  
      if (response.status === 200) return response.data.data;
      else return [];
    } catch (error) {
      console.log("Error:", error.message);
      return [];
    }
  };

  export const getOneEmprendimiento = async (emprendimientoId) => {
    try {
      if (!emprendimientoId) throw new Error("emprendimientoId is required!");
  
      const response = await axios.get(`${BASE_URL}/emprendimientos/${emprendimientoId}`);
      // console.log(response);
  
      if (response.status === 200) return response.data.data;
      else return undefined;
    } catch (error) {
      console.log("Error:", error.message);
      return undefined;
    }
  };

  export const getEmprendimientoByEmail = async (correoElectronico) => {
    try {
      if (!correoElectronico) throw new Error("Correo electrónico is required!");
  
      const response = await axios.get(`${BASE_URL}/emprendimientos?correo=${correoElectronico}`);
      console.log('Response from getEmprendimientoByEmail:', response.data);
  
      if (response.status === 200) return response.data.data;
      else return undefined;
    } catch (error) {
      console.log("Error:", error.message);
      return undefined;
    }
  };
  
  export const createCliente = async (formData) => {
    try {
  
      // Si no hay duplicados, crea el nuevo emprendimiento
      const response = await axios.post(`${BASE_URL}/clientes`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response from server:', response.data);
  
      return response.data;
    } catch (error) {
      console.error('Error al realizar la petición:', error);
      if (error.status === 409) {
        // Propaga el error de conflicto
        throw error;
      } else {
        throw new Error("Error occurred while creating the user. Please try again.");
      }
    }
  };
  

  export const getCliente = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/clientes`);
      // console.log(response); // DEBUG
  
      if (response.status === 200) return response.data.data;
      else return [];
    } catch (error) {
      console.log("Error:", error.message);
      return [];
    }
  };

  export const getOneCliente = async (clienteId) => {
    try {
      if (!clienteId) throw new Error("clienteId is required!");
  
      const response = await axios.get(`${BASE_URL}/clientes/${clienteId}`);
      // console.log(response);
  
      if (response.status === 200) return response.data.data;
      else return undefined;
    } catch (error) {
      console.log("Error:", error.message);
      return undefined;
    }
  };

  export const getClienteByEmail = async (correoElectronico) => {
    try {
      if (!correoElectronico) throw new Error("Correo electrónico is required!");
  
      const response = await axios.get(`${BASE_URL}/clientes?correo=${correoElectronico}`);
      console.log('Response from getClienteByEmail:', response.data);
  
      if (response.status === 200) return response.data.data;
      else return undefined;
    } catch (error) {
      console.log("Error:", error.message);
      return undefined;
    }
  };
  