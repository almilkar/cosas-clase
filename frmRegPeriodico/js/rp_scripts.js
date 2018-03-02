
	function cuantasHay(cadena, letra) {
		cuenta = 0;
		posicion = cadena.indexOf(letra);
		while ( posicion != -1 ) {
   			cuenta++;
   			posicion = cadena.indexOf(letra, posicion+1);
		}
		return cuenta;
	}

	
	function alEnviarRegistro() {
	    var respuesta = true;
	    
	    var email = document.getElementById("email").value;
	    var alias = document.getElementById("alias").value;
	    var password = document.getElementById("password").value;
	    var repassword = document.getElementById("repassword").value;
	    var respuesta = document.getElementById("respuesta").value;

	    if (validarEmail(email, "msjEmail", true) == false) return false;
	    if (validarAlias(alias, "msjAlias", true) == false) return false;
	    if (validarPassword(password, "msjPassword", true) == false) return false;
	    if (validarRepassword(repassword, "msjRepassword", true) == false) return false;
	    if (validarRespuesta(respuesta, "msjRespuesta", true) == false) return false;

	    return respuesta;
	  }

	function validarEmail(valor, msj, esSummit) {
		var res = false;
		valor = valor.trim();
		longitud = valor.length;

		if (esSummit == false) {
			if (longitud == 0) {
				return true;
			}
		}

		if (longitud >= 5) {
			if (cuantasHay(valor,".")>1) {
				document.getElementById(msj).textContent = "Aviso formato e-mail: x@y.z"
				return false;
			}
			if (cuantasHay(valor,"@")>1) {
				document.getElementById(msj).textContent = "Aviso formato e-mail: x@y.z"
				return false;
			}
			var posArroba = valor.indexOf("@");
			var posPunto = valor.indexOf(".");
			if ((posPunto - posArroba >= 2) && (posPunto <= longitud - 2) && (posArroba > 0)) {
				res = true;
				document.getElementById(msj).textContent = ""
			} else {
				res = false;
				document.getElementById(msj).textContent = "Aviso formato e-mail: x@y.z"
			}
		} else {
			res = false;
			document.getElementById(msj).textContent = "Aviso formato e-mail: x@y.z"
		}
		return res;	
	}

	function validarAlias(valor, msj, esSummit) {
		var res = false;
		var cadena = valor.trim();
		var longitud = cadena.length;

		if (esSummit == false) {
			if (longitud == 0) {
				return true;
			}
		}
		if (longitud > 0) {
			res = true;
			document.getElementById(msj).textContent = "";
		} else {
			res = false;
			document.getElementById(msj).textContent = "Aviso: Es necesario indicar un alias. Gracias";
		}
		return res;
	}
	function validarPassword(valor, msj, esSummit) {
		var res = false;
		var cadena = valor.trim();
		var longitud = cadena.length;

		if (esSummit == false) {
			if (longitud == 0) {
				return true;
			}
		}
		if (longitud > 0) {
			res = true;
			document.getElementById(msj).textContent = "";
		} else {
			res = false;
			document.getElementById(msj).textContent = "Aviso: Es necesario indicar contraseña. Gracias";
		}
		return res;
	}
	function validarRepassword(valor, msj, esSummit) {
		var res = false;

		var password = document.getElementById("password").value.trim();
		var repassword = document.getElementById("repassword").value.trim();

		if (password.length > 0 && password == repassword) {
			res = true;
			document.getElementById(msj).textContent = "";
		} else {
			res = false;
			document.getElementById(msj).textContent = "No coinciden los valores de contraseña";
		}

		return res;	
	}

	function validarPreguntas() {
		var res = false;
		var opt = document.getElementById("preguntas").value;
		if (opt > 0) {
			document.getElementById("emitir").removeAttribute('disabled');
			res = true;
		} else {
			document.getElementById("emitir").setAttribute('disabled','disabled');
			res = false;
		}
		return res;	
	}

	function validarRespuesta(valor, msj, esSummit) {
		var res = false;
		var cadena = valor.trim();
		var longitud = cadena.length;

		if (esSummit == false) {
			if (longitud == 0) {
				return true;
			}
		}
		if (longitud > 0) {
			res = true;
			document.getElementById(msj).textContent = "";
		} else {
			res = false;
			document.getElementById(msj).textContent = "Aviso: Es necesario contestar la pregunta. Gracias";
		}
		return res;	
	}
