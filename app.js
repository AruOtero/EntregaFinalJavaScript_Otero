
function validarFormulario(e) {
    e.preventDefault();
    
    const importe = Number(document.getElementById("importe").value);
    const cuotas = Number(document.getElementById("cuotas").value);
    const vencimiento = Number(document.getElementById("vencimiento").value);

    if (isNaN(importe) || isNaN(cuotas) || isNaN(vencimiento)) {
        // Manejo de error si los valores no son números
        return;
    }

    let verCuota = 0;

    if (vencimiento === 30) {
        verCuota = (importe + interes) / cuotas;
    } else {
        verCuota = (importe + interes) / cuotas * 2;
    }

    // Crear un objeto con los datos a guardar en el Local Storage
    const data = {
        verCuota: verCuota,
        importe: importe,
        cuotas: cuotas,
        vencimiento: vencimiento
    };

    // Convertir el objeto en una cadena JSON
    const jsonData = JSON.stringify(data);

    // Guardar la cadena JSON en el Local Storage
    localStorage.setItem("prestamoData", jsonData);

    Swal.fire({
        title: `El valor de la cuota es ${verCuota}`,
        confirmButtonText: "Salir"
    });
}