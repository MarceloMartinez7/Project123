document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const resultado = document.getElementById("resultado");
  
    form.addEventListener("submit", (event) => {
        event.preventDefault();
  
        const distancia = parseFloat(document.getElementById("distancia").value);
        const tiempo = parseFloat(document.getElementById("tiempo").value);
  
        if (distancia > 0 && tiempo > 0) {
            const velocidad = distancia / tiempo;
            resultado.textContent = `Velocidad promedio: ${velocidad.toFixed(2)} km/h`;
        } else {
            resultado.textContent = "Por favor, ingrese valores válidos.";
        }
    });
  });
  