function validacion(){
    const name = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const num =document.getElementById("numero").value;

    if(name=="" || email=="" || num==""){
        alert("por favor completar todos los campos!");
    

    }else{
        alert(`¡formulario enviado correctamente`)



    }



    
} 