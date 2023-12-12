function calcularVolumen (ancho, largo){
  return ancho * largo;
}

function calcularZocalos (anchoAmbiente,largoAmbiente,anchoCeramica,largoCeramica){
  let perimetroAmbiente= (anchoAmbiente*2)+(largoAmbiente*2);
  let borde = anchoCeramica/8;
  Math.trunc(borde);
  let cantzocalos = perimetroAmbiente / largoCeramica;
  Math.trunc(cantzocalos);
  let calculo = cantzocalos/borde;
  Math.trunc(calculo);
  return calculo;
}

let ambientes = prompt("ingrese cuantos ambientes desea calcular");

for(let i =1; i <= ambientes; i++){
  let anchoCeramica = prompt("ingrese la medida de ancho de su ceramica");
  let largoCeramica = prompt("ingrese la medida de largo de su ceramica");
  let volumenCeramica = calcularVolumen(anchoCeramica, largoCeramica);
  let anchoAmbiente = prompt("ingrese la medida de ancho del ambiente");
  let largoAmbiente = prompt("ingrese la medida de largo del ambiente");
  let volumenAmbiente= calcularVolumen(anchoAmbiente, largoAmbiente);
  let zocalos = prompt("desea agregar zocalos Y = si/ N = no");
  if (zocalos === "Y"){
    let totalZocalos = calcularZocalos(anchoAmbiente,largoAmbiente,anchoCeramica,largoCeramica);
    let resultado = volumenAmbiente/volumenCeramica;
    Math.trunc(resultado);
    let total = resultado + totalZocalos;
    alert(`necesitas ${total} Ceramicas!`);

  }
  else{
    let resultado = volumenAmbiente/volumenCeramica;
    Math.trunc(resultado);
    alert(`necesitas ${resultado} Ceramicas!`);
  
  }
}