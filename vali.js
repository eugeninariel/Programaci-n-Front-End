function validar() {
    var result_val_email = validar_email();
    var result_val_passw = validar_password();
    //var result_val_repassw = validar_repassword();
    var result_val_codigop = validar_codigop();
    var result_val__direccion= validar_direccion();
    var result_val_localidad = validar_localidad();
    var result_val_telefono = validar_movil();
    
     
    return (result_val_email && result_val_passw && result_val_direcc);
}

function validar_fto_email(email) {
    var idx_arroba = email.indexOf("@");
    if (idx_arroba < 1) {
        return false;
    }        
        return true;
    
}

function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("msj-email");
    if (email != "") {
        if (validar_fto_email(email)) {
            div.innerHTML = "";
            return true;
        } else {
            div.innerHTML = "El formato del email no es valido";
            div.className = "text-danger";
            return false;
        }
    } else {
        div.innerHTML = "El email no puede estar en blanco";
        div.className = "text-danger";
        return true;
    }
}

function validar_password() {
    var passw = document.getElementById("password").value;
    var div = document.getElementById("msj-passw");
    if  (passw.length > 5) {
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "La contraseña debe ser de al menos 6 caracteres";
        div.className = "text-danger";
        return false;
    }
}



function validar_codigop() {
    var codigop = document.getElementById("codigop").value;
    var div = document.getElementById("msj-codigop");
    if  (codigop.length > 6) {
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "campo obligatorio";
        div.className = "text-danger";
        return false;
    }
}
function validar_direccion(){
    var direccion = document.getElementById("direccion").value;
    var div = document.getElementById("msj-direccion");
    if(direccion.length > 0){
        div.innerHTML = "";
        return true ;
    }  else {
        div.innerHTML = "campo obligatorio";
        div.className = "text-danger";
        return false;
    }
}
function validar_localidad(){
    var localidad = document.getElementById("localidad").value;
    var div = document.getElementById("msj-localidad");
    if(localidad.length > 0){
        div.innerHTML = "";
        return true ;
    }  else {
        div.innerHTML = "campo obligatorio";
        div.className = "text-danger";
        return false;
    }
}




function validar_movil() {
    var movil = document.getElementById("movil").value;
    var div = document.getElementById("msj-movil");
    if  (movil.length > 8) {
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "campo obligatorio";
        div.className = "text-danger";
        return false;
    }
}

 




