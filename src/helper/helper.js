

export const require=(fileName)=>{
    return new URL(`../assets/${fileName}.svg`, import.meta.url).href;
}


export const addDecimals = (value) =>{
    var decimal = String(value).split('.')[1]
    var length = decimal && decimal.length > 2 ? decimal.length : 2
    return Number(value).toFixed(length)
}