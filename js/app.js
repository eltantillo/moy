const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) => {
    e.preventDefault();
  const respuesta = await fetch('https://sheet.best/api/sheets/93bce439-fb04-4ca3-80a4-9dd0021046f8', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Nombre": formulario.nombre.value,
            "Confirmacion": formulario.confirmacion.value,
            "Telefono": formulario.telefono.value,
        })
    });
// Leer Filas
    registro.classList.remove('active');
    exito.classList.add('active'); 
});