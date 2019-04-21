function validarform(){
	//alert("hola a todos");
	var txtNombre = document.getElementById('nombre').value;
	var txtDireccion = document.getElementById('direccion').value;
	var txtTelefono = document.getElementById('telefono').value;
	var txtCorreo = document.getElementById('correo').value;
	var txtCiudad = document.getElementById('ciudad').value;
	var txtEdad = document.getElementById('edad').value;
	
	//Test campo obligatorio
	if(txtNombre == null || txtNombre.length == 0 ){
	alert('ERROR: debes ingresar un nombre');
	return
	}
	if(txtDireccion == null || txtDireccion.length == 0 ){
	alert('ERROR: debes ingresar una dirección ');
	return false;
	}
	if(txtTelefono == null || txtTelefono.length == 0 ){
	alert('ERROR: debes ingresar un teléfono');
	return false;
	}
	if(txtCorreo == null || txtCorreo.length == 0 ){
	alert('ERROR: debes ingresar un correo');
	return false;
	}
	if(txtCiudad == null || txtCiudad.length == 0 ){
	alert('ERROR: debes ingresar una ciudad');
	return false;
	}
	if(txtEdad == null || txtEdad.length == 0 ){
	alert('ERROR: debes ingresar la edad ');
	return false;
	}
	
	alert('DATOS CORRECTOS, ENVIANDO INFORMACIÓN AL SERVIDOR');
	return true;
}


  
        