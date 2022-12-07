function login(){
    var a = prompt("Ingrese el codigo enviado!");
    b="1234"

    if(a == b){
        alert("El cambio de contraseña fue exitoso");
    }else{
        alert("Codigo erroneo, vuelve a intentarlo");

    }
}