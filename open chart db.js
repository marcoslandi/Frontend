const base_datos_espectral = await fetch("F:\\Scan Terra\\Proyectos\\Proyeto MVP\\promedios.json").then((response) => response.json());
const base_datos_indice = base_datos_espectral.filter((item) => item.nombre == "MTCI")[0];
console.log(base_datos_indice);


