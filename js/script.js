(function() {
  // apliacion de un reloj en tiempo real

  function actualizarHora() {
    d = new Date();
    var dia = d.getDay(),
    diaDelMes = d.getDate(),
    mes = d.getMonth(),
    año = d.getFullYear(),
    hora = d.getHours(),
    minutos = d.getMinutes(),
    segundos = d.getSeconds(),
    amPm;
    var semana = ["lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
     "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    pDia = document.getElementById("dia");
    pDiaDelMes = document.getElementById("diaDelMes");
    pMes = document.getElementById("mes");
    pAño = document.getElementById("año");
    pHora = document.getElementById("hora");
    pMinutos = document.getElementById("minutos");
    pSegundos = document.getElementById("segundos");
    pAmPm = document.getElementById("amPm");

    if (hora > 12) {
      hora = hora - 12;
      amPm = "PM";
    } else {
      amPm = "AM";
    }

    if (minutos < 10 ) {
      minutos = "0" + minutos;
    }

    if (segundos < 10 ) {
      segundos = "0" + segundos;
    }

    pDia.textContent = semana[dia];
    pDiaDelMes.textContent = diaDelMes;
    pMes.textContent = meses[mes];
    pAño.textContent = año;
    pHora.textContent = hora;
    pMinutos.textContent = minutos;
    pSegundos.textContent = segundos;
    pAmPm.textContent = amPm;
  }

  var intervalo = setInterval(actualizarHora, 1000);


  {/*
  // ejemplo de objeto

  hay una persona que se llama juan los datos de juan se van a guardar en una variable
  y esta variable sera un objeto

  persona = {nombre: 'John', años: 50};
  elemento = document.getElementById('demo');
  nuevoE = document.createElement('p');
  contenido = document.createTextNode(persona.nombre + 'tiene ' + persona.años + ' años');
  nuevoE.appendChild(contenido);
  elemento.appendChild(nuevoE);
  */
  }
}())
