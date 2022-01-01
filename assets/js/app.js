/* Validación del formulario */
$("#contact-form").submit(function (event) {
    event.preventDefault();
    console.log("hola mundo");
  
    var nombre = $("#inputNombre").val();
    var asunto = $("#inputAsunto").val();
    var mensaje = $("#inputMensaje").val();
  
    console.log("estos son los datos capturados del formulario")
    console.log({ nombre, asunto, mensaje })
    
    setTimeout(function () {
      $("#inputNombre").val("");
      $("#inputAsunto").val("");
      $("#inputMensaje").val("");
      alert("mensaje enviado con exito, pronto alguien te contactara")
    }, 2000)
  });
  
