// Los datos del titular se configuran con variables de entorno para no guardar el NIF en git.
// Si falta alguno, las páginas legales avisan de que están pendientes.
export const titular = {
  nombre: import.meta.env.PUBLIC_TITULAR_NOMBRE ?? "",
  nif: import.meta.env.PUBLIC_TITULAR_NIF ?? "",
  domicilio: import.meta.env.PUBLIC_TITULAR_DOMICILIO ?? "",
  correo: import.meta.env.PUBLIC_TITULAR_CORREO ?? "",
};

export const titularCompleto = Object.values(titular).every(Boolean);
