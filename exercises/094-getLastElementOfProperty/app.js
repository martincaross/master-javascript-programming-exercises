// Write your function here
function getLastElementOfProperty(obj, key) {
    // Verifica si la propiedad existe y es un array
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
        return obj[key][obj[key].length - 1]; // Accede al último elemento
    }
    return undefined; // Retorna undefined si no es un array o está vacío
}
let obj = {
    key: [1, 2, 5]
  };
  let output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5