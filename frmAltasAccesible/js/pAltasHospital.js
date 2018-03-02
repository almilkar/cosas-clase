 /* -------------------------
  * FUNCION
  * - function ISOaMiliseg70(fechaISO) : nº de milisegundos desde 1970
  * PARAMETROS
  * - fechaISO: cadena AAAA MM DD. Acepta los separadores del contructor "Date"
  * CONTEXTO
  *   Función auxiliar
  * DESCRIPCION
  *   
  *
  */
  function ISOaMiliseg70(fechaISO) {
    var d = new Date(fechaISO);
    return d.getTime();
  }

  /* -------------------------
  * FUNCION
  * - function diasEntreFechas(fechaM70) : nº de días entre parámetro y actual.
  * PARAMETROS
  * - fechaM70: fecha en milisegundos desde 1970
  * CONTEXTO
  *   Función auxiliar
  * DESCRIPCION
  *   Calcula los días entre la fecha del parámetro y la obtenida por la función 
  *   como actual.
  *
  */
  function diasEntreFechas(fechaM70) {
    var d = new Date();
    var miliseg70 = d.getTime();
    var difseg70 = fechaM70 - miliseg70;
    var dias = -1;
    if (difseg70 >= 0) {
      dias = Math.round(difseg70/1000/60/60/24); 
    }
    return dias;
  }

/* -------------------------
  * FUNCION
  * - function sumaDias(fechaM70, numdias) : nº de miliseg desde 1970 de la nueva
  *                                          fecha obtenida
  * PARAMETROS
  * - fechaM70: fecha en milisegundos desde 1970
  * - numdias: días a sumar a la fecha anterior
  * CONTEXTO
  *   Función auxiliar
  * DESCRIPCION
  *   Calcula la fecha que se obtiene de sumar los días "numdias" a la fecha "fechaM70"
  *   y se devuelve en milisegundos desde 1970
  *
  */
	function sumaDias(fechaM70, numdias) {
		var milis = numdias * 24 * 60 * 60 * 1000;
		return fechaM70 + milis;
	}

/* -------------------------
  * FUNCION
  * - function miliseg70aISO(milisegundos70, sepFecha)
  * PARAMETROS
  * - milisegundos70: fecha en milisegundos desde 1970
  * - sepFecha: separador
  * CONTEXTO
  *   Función auxiliar
  * DESCRIPCION
  *   Convierte la fecha milisegundos desde 1970 en formato ISO
  *
  */
	function miliseg70aISO(milisegundos70, sepFecha) {
		var d = new Date(milisegundos70);
		var cad = [d.getFullYear(), sepFecha,
		("" + (d.getMonth() + 101) + "").substring(1,3),
		sepFecha,
		("" + (d.getDate() + 100) + "").substring(1,3)];
		return cad.join("");
	}
  function miliseg70aHoraMinSeg(milisegundos70, sepHora) {
    var d = new Date(milisegundos70);
    var cad = [("" + (d.getHours() + 100) + "").substring(1,3), sepHora,
    ("" + (d.getMinutes() + 100) + "").substring(1,3),
    sepHora,
    ("" + (d.getSeconds() + 100) + "").substring(1,3)];
    return cad.join("");
  }
  function miliseg70aHoraMin(milisegundos70, sepHora) {
    var d = new Date(milisegundos70);
    var cad = [("" + (d.getHours() + 100) + "").substring(1,3), sepHora,
    ("" + (d.getMinutes() + 100) + "").substring(1,3)];
    return cad.join("");
  }


/* -------------------------
  * FUNCION
  * - function proponeFechaEntrega(diasSobreFechaPedido): cadena nueva fecha ISO
  * PARAMETROS
  * - diasSobreFechaPedido: días a sumar a la fecha del sistema.
  * CONTEXTO
  *   Función auxiliar
  * DESCRIPCION
  *   Sobre la fecha actual suma días y presenta el resultado como Fecha ISO
  *
  */
  function proponeFechaEntrega(diasSobreFechaPedido) {
    var q = new Date();
    var actual = q.getTime();
    return cadena = miliseg70aISO(sumaDias(actual,diasSobreFechaPedido),"-");
  }

////////////////////////////////////////////////////////////////////////////


/* -------------------------
  * FUNCION
  * - function validaCHK(nombreCHK, prefijoIdInput, maxTitulos, maxUnidades): boolean
  * PARAMETROS
  * - nombreCHK: Checkbox para marcar el número de títulos a pedir, asociado al "input number" 
  *               que contiene las unidades de cada título.
  * - prefijoIdInput: Identifica el "input number"
  * - maxTitulos: límite títulos
  * - maxUnidades: límite unidades totales.
  * CONTEXTO
  *   Asociar a un proceso de validación antes de envíar el formulario
  * DESCRIPCION
  *   Recorre el array de checkbox con el nombre "nombreCHK" y determina cuantos son CHECKED 
  *   y para cada CHECKED suma las unidades de los "input" asociados por el parámetro 
  *   "prefijoIdInput". Los totales obtenidos se comparan con los máximos indicados por los
  *   parámetros "maxTitulos" y "maxUnidades". El máximo de unidades por título se indica
  *   como atributo del "input number".
  *
  */
  function numeroDolencias() {
    var numDolencias = 0;
    var x = document.getElementsByName("nDolenciasCHK");
    for (var i = 0; i < x.length; i++) {
      if (x[i].type == "checkbox") {
        if (x[i].checked == true) {
          ++numDolencias;
        }
      }
    }
    return numDolencias;
  }

  function resetDolencias() {
    var x = document.getElementsByName("nDolenciasCHK");
    for (var i = 0; i < x.length; i++) {
      if (x[i].type == "checkbox") {
        var id = x[i].id;
        document.getElementById(id).checked = false;
        document.getElementById(id).removeAttribute('checked');
      }
    }
    document.getElementById("idnumSS").focus;
  }
/////////////////////////////////////////////////////////////////////////
  function actualizaDiasIngresado(nss) {
    var numDias = 0;
    var cp = validaNumSS(nss); 
    if (cp > 0) {
      numDolencias = numeroDolencias();
      if (numDolencias > 0) {
        if (cp == 24) {
          document.getElementById("idDias").value = numDolencias * 2 + 1;
          document.getElementById("msjidDias").textContent = "";
        } else {
           document.getElementById("idDias").value = numDolencias * 2;
           document.getElementById("msjidDias").textContent = "";
        }
      } else {
        document.getElementById("idDias").value = 0;
        document.getElementById("msjidDias").textContent = "Aviso: Debe indicar alguna dolencia";
      }
    } else {
      document.getElementById("idDias").value = 0;
      document.getElementById("msjidDias").textContent = "Aviso (NSS): Sin un NSS válido no es posible calcular días";
    }
  }
  //////////////////////////////////////////////////////////////////////////

  function compruebaDias(numDias) {
    var respuesta = false;

    if (numDias == 0) {
      document.getElementById("msjidDias").textContent = "Error: No ha indicado dolencias";
      respuesta = false;
    } else {
      document.getElementById("msjidDias").textContent = "";
      respuesta = true;
    }
    return respuesta;
  }

  ///////////////////////////////////////////////////////////////////////
  function alEnviarAlta() {
    var respuesta = false;
    var dias = document.getElementById("idDias").value;
    respuesta = compruebaDias(dias);
    return respuesta;
  }


//////////////////////////////////////////////////////////////////////////

  function paginaCargada() {
    ponerFechaActual();
  }

  function validaNombre(nombre, origen) {
    var respuesta = true;
    if (nombre != "") {
      if (nombre.length<=1) {
        document.getElementById("msj" + origen).textContent = "Error (nombre/apellidos): Mínimo dos caracteres";
        respuesta = false;
      } else {
        document.getElementById("msj" + origen).textContent = "";
        respuesta = true; 
      }
    } else {
      document.getElementById("msj" + origen).textContent = "";
      respuesta = true;
    }
    return respuesta;
  }
//////////////////////////////////////////////////////////////////////////////////////////////
  function validaNumDNI(dni, origen) {
    var respuesta = true;
    dni = dni.toString().trim();
    if (dni != "") {
      if (dni.length<8 || dni.length>10) {
        document.getElementById("msj" + origen).textContent = "Error (DNI): Mínimo 8, máximo 10 caracteres";
        respuesta = false;
      } else {
        var letra = dni.charAt(dni.length - 1);
        //var letras = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
        var letras = "TRWAGMYFPDXBNJZSQVHLCKET";
        letra = letra.toUpperCase();
        if (letras.indexOf(letra) == -1) {
          document.getElementById("msj" + origen).textContent = "Error (DNI): Falta la letra al final o no es válida";
          respuesta = false;
        } else {
          var numero = dni.substring(0, dni.length-1);
          numero = parseInt(numero);
          if (typeof(numero) == 'number') {
            document.getElementById("msj" + origen).textContent = "";
            respuesta = true; 
          } else {
            document.getElementById("msj" + origen).textContent = "Error (DNI): Formato no válido";
            respuesta = false;
          }
        }
      }
    } else {
      document.getElementById("msj" + origen).textContent = "";
      respuesta = true;
    }
    return respuesta;
  }

  //////////////////////////////////////////////////////////////////////////////////////////

  function validaNumSS(nss) {
    var origen = "idnumSS";
    var codnumprov = 0;
    if (nss === undefined) {
      document.getElementById("msj" + origen).textContent = "";
      return codnumprov;
    }
    nss = nss.toString().trim();
    if (nss == "") {
      document.getElementById("msj" + origen).textContent = "";
      resetDolencias();
    } else {
      if (Number.isNaN(nss) === true) {
        document.getElementById("msj" + origen).textContent = "Error (SS): Debe tener 12 caracteres numéricos";
        resetDolencias();
      } else {
        if (nss.length != 12) {
          document.getElementById("msj" + origen).textContent = "Error (SS): Debe tener 12 caracteres numéricos";
          resetDolencias();
        } else {
          var codprov = nss.substring(0,2);
          codnumprov = parseInt(codprov);
          if (codnumprov > 52 || codnumprov < 1) {
            document.getElementById("msj" + origen).textContent = "Error (CP): Un código de provincia válido está entre 01 y 52";
            resetDolencias();
          } else {
            document.getElementById("msj" + origen).textContent = "";
          }
        }
      } 
    }
    return codnumprov;
  }

///////////////////////////////////////////////////////////////////////

function testP1() {

  document.getElementById("idnombre").value = "Alfredo";
  document.getElementById("idapellido1").value = "Martínez";
  document.getElementById("idapellido2").value = "López";
  document.getElementById("idnumDNI").value = "44123123K";
  document.getElementById("idnumSS").value = "241231231230";
  ponerFechaActual();
  
  document.getElementById("idnumSS").focus;
  document.getElementById("idnombre").focus;
  
  document.getElementById('msjidnombre').textContent = "";
  document.getElementById('msjidapellido1').textContent = "";
  document.getElementById('msjidapellido2').textContent =  "";
  document.getElementById('msjidnumDNI').textContent = "";
  document.getElementById('msjidnumSS').textContent = "";
  document.getElementById("msjidDias").textContent = "";

}
///////////////////////////////////////////////////////////////////////
function ponerFechaActual() {
  dd = new Date();
  document.getElementById("idfecha").value = miliseg70aISO(dd.getTime(),"-");
  document.getElementById("idhora").value = miliseg70aHoraMin(dd.getTime(),":");
}
//////////////////////////////////////////////////////////////////////
function resetForm() {
  document.getElementById('msjidnombre').textContent = "";
  document.getElementById('msjidapellido1').textContent = "";
  document.getElementById('msjidapellido2').textContent =  "";
  document.getElementById('msjidnumDNI').textContent = "";
  document.getElementById('msjidnumSS').textContent = "";
  document.getElementById("msjidDias").textContent = "";
  document.getElementById('frmAltas').reset();
  ponerFechaActual();
}
///////////////////////////////////////////////////////////////////////

