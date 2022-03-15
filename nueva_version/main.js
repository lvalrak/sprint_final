//Validacion formulario

function checkform() {
  //document.form.nombre.value.length

  if (form.nombre.value == "") {
    alert("No completó su nombre. Inténte nuevamente.");
    form.nombre.focus();
    return false;
  } else {
    if (form.nombre.value.length < 8) {
      alert(
        "Escriba al menos un nombre y un apellido, Nombre demasiado corto!"
      );
      form.nombre.focus();
      return false;
    }
  }

  if (form.email.value == "") {
    alert(
      "No completó su dirección de correo electrónico. Inténtelo de nuevo."
    );
    form.email.focus();
    return false;
  } else {
    if (form.email.value.length < 8) {
      alert("¡Tu dirección de correo electrónico es demasiado corta!");
      form.email.focus();
      return false;
    }
  }

  if (form.areatexto.value == "") {
    alert("Area de Comentarios o sugerencias esta vacío. Inténte nuevamente.");
    form.areatexto.focus();
    return false;
  } else {
    if (form.areatexto.value.length < 8) {
      alert(" Lo comentado no es suficiente...");
      form.areatexto.focus();
      return false;
    }
  }


    alert ("Los datos se han enviado con éxito");


  return true;
}

//JQuery - estadisticas

$(document).ready( function () {
  $('#datat').DataTable();
} );
