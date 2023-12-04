
export const createProductoValidator = (formData) => {
  const errors = {};

  if (!formData.nombreProducto || formData.nombreProducto.length < 8 || formData.nombreProducto.length > 24) {
    errors.nombreProducto = 'El campo nombreProducto es obligatorio y debe tener entre 8 y 24 caracteres.';
  }

  if (!formData.descripcionProducto || formData.descripcionProducto.length < 8 || formData.descripcionProducto.length > 240) {
    errors.descripcionProducto = 'El campo descripcionProducto es obligatorio y debe tener entre 8 y 240 caracteres.';
  }

  if (!formData.precio || isNaN(formData.precio)) {
    errors.precio = 'El campo precio debe ser un número y es obligatorio.';
  }

  return errors;
}

export const createEmprendimientoValidator = (formData) => {
  const errors = {};

  if (!formData.nombreEmprendimiento || formData.nombreEmprendimiento.length < 8 || formData.nombreEmprendimiento.length > 24) {
    errors.nombreEmprendimiento = 'El campo nombreEmprendimiento es obligatorio y debe tener entre 8 y 24 caracteres.';
  }

  if (!formData.imagenEmprendimiento || formData.imagenEmprendimiento.length < 8 || formData.imagenEmprendimiento.length > 240) {
    errors.imagenEmprendimiento = 'El campo imagenEmprendimiento es obligatorio y debe tener entre 8 y 240 caracteres.';
  }

  if (!formData.infoContacto || isNaN(formData.infoContacto)) {
    errors.infoContacto = 'El campo infoContacto debe ser un número y es obligatorio.';
  }

  if (!formData.direccion || formData.direccion.length < 8 || formData.direccion.length > 240) {
    errors.direccion = 'El campo direccion es obligatorio y debe tener entre 8 y 240 caracteres.';
  }

  if (!formData.descripcion || formData.descripcion.length < 8 || formData.descripcion.length > 240) {
    errors.descripcion = 'El campo descripcion es obligatorio y debe tener entre 8 y 240 caracteres.';
  }

  if (!formData.correo || formData.correo.length < 8 || formData.correo.length > 100) {
    errors.correo = 'El campo correo es obligatorio y debe tener entre 8 y 100 caracteres.';
  }

  if (!formData.password || formData.password.length < 8 || formData.password.length > 10) {
    errors.password = 'El campo password es obligatorio y debe tener entre 8 y 10 caracteres.';
  }

  return errors;
}

export const createClienteValidator = (formData) => {
  const errors = {};

  if (!formData.nombre || formData.nombre.length < 3 || formData.nombre.length > 24) {
    errors.nombre = 'El campo nombre es obligatorio y debe tener entre 8 y 24 caracteres.';
  }

  if (!formData.apellido || formData.apellido.length < 3 || formData.apellido.length > 24) {
    errors.apellido = 'El campo apellido es obligatorio y debe tener entre 8 y 240 caracteres.';
  }

  if (!formData.imagenCliente || formData.imagenCliente.length < 8 || formData.imagenCliente.length > 240) {
    errors.imagenCliente = 'El campo imagenCliente es obligatorio y debe tener entre 8 y 240 caracteres.';
  }

  if (!formData.infoContacto || isNaN(formData.infoContacto)) {
    errors.infoContacto = 'El campo infoContacto debe ser un número y es obligatorio.';
  }

  if (!formData.correoElectronico || formData.correoElectronico.length < 8 || formData.correoElectronico.length > 240) {
    errors.correoElectronico = 'El campo correoElectronico es obligatorio y debe tener entre 8 y 240 caracteres.';
  }

  if (!formData.contrasenna || formData.contrasenna.length < 8 || formData.contrasenna.length > 10) {
    errors.contrasenna = 'El campo contrasenna es obligatorio y debe tener entre 8 y 10 caracteres.';
  }

  return errors;
}


