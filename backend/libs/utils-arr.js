
/**
 * 
 * @param {Array} arr 
 * @param {String} val 
 * @param {String} name 
 */
function GroupArrBy(arr, val, name) {
    //Creamos un nuevo objeto donde vamos a almacenar por ciudades. 
    let nuevoObjeto = {}
    //Recorremos el arreglo 
    ids = []
    arr.forEach(x => {
       const index = ids.findIndex(item => x[val] === item.id);
        if(index === -1) {
            ids.push({id: x[val], name: x[name], subcategoria: [x]})
        } else {
            ids[index].subcategoria.push(x)
        }
    })

    return ids;
}

/**
 * 
 * @param {Array} arr 
 * @param {String} val
 */
function CovertArrayString(arr, val) {
    //Creamos un nuevo objeto donde vamos a almacenar por ciudades. 
    let nuevoObjeto = {}
    //Recorremos el arreglo 
    ids = []
    arr.forEach(x => {
       ids.push(x[val])
    })

    return ids;
}

module.exports = {
    GroupArrBy,
    CovertArrayString
}