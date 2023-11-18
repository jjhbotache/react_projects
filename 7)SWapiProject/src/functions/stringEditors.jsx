export function getIdFromLink(link) {
    // Utilizando expresiones regulares para extraer el último número del enlace
    const match = link.match(/\/(\d+)\/?$/);
    
    // Verificar si se encontró un resultado
    if (match) {
      // El ID estará en la posición 1 del array de coincidencias
      const id = match[1];
      return id;
    } else {
      // Retornar null si no se encuentra ningún número al final del enlace
      return null;
    }
}