const fnValidar10 = () => {
    let xNombre = document.getElementById("txtNombre").value;
    if(xNombre=="" || /^\s+$/.test(xNombre)){
        alert("falta colocar Nombres y Apellidos...");
        return false;
    }

    let XEdad = document.getElementById("txtEdad").value;
    if(XEdad=="") {
        alert("falta la edad...");
        return false;
    }
    
    let elementoPref = document.getElementsByName("chkPrefer2");
	let valorElegidoPreferencia = "";
	let eligioPreferencia = false;
	for(let i=0; i < elementoPref.length; i++) {
		if(elementoPref[i].checked) {
			valorElegidoPreferencia = elementoPref[i].value;
			eligioPreferencia = true;
		}
	}

    if(!eligioPreferencia){
		alert("Elija min 2 opciones");
		return false;
	}else{
		alert("Su preferencias elegidas son " + valorElegidoPreferencia );
	}

    /// caso contrario ///
    return true; 
}