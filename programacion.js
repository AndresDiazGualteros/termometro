function RecogerDatos() {
  let valor1 = document.getElementById("fahrenheit").value;
  let convertir = parseInt(((valor1 - 32) * 5) / 9);
  document.getElementById("resultado").value = convertir;
  let Grados = document.getElementById("Grados");
  if (convertir <= 0) {
    Grados.style.width = "0%";
    Grados.innerHTML = convertir;
  } else {
    Grados.style.width = convertir + "%";
    Grados.innerHTML = convertir;
  }
}
let boton = document.getElementById("Button");
boton.addEventListener("click", RecogerDatos);
