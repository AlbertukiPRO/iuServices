window.onload = () => {
    //alert("hola");
}

$(document).ready(function(){
    $('.tooltipped').tooltip();
    $('.modal').modal();
});



document.getElementById("sendform").addEventListener("click", ()=>{

    const fileds = document.getElementsByTagName("input");

    let formData = new FormData();
    formData.append("nombre", fileds.item(0).value);
    formData.append("correo", fileds.item(1).value);
    formData.append("contrasena", fileds.item(3).value);
    formData.append("img", fileds.item(2).value);

    console.log(formData);

    sendDataToService(formData).then(r => {
        r === false ? alert("No se pudo registrar") : M.toast({html: 'Se inserto correctamente'});
    })


});

async function sendDataToService(datos) {
    const url = "http://localhost:8081/clientes/insertCliente";
    return fetch(url, {
        method: "POST",
        body: datos
    }).then((response)=> {
        console.log(response.status, response.statusText);
        return response.json();
    })
        .then((jsondata) => jsondata).catch((error)=> alert(error) );
}