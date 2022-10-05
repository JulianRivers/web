function procesar(){
    
    var idPersona = frmDatos.id.value;
    var nom = frmDatos.nombre.value;
    var tel = frmDatos.telefono.value;
    var ema = frmDatos.email.value;

    const persona = {
        id : idPersona,
        nombre : nom,
        telefono : tel,
        email : ema
    }

    localStorage.setItem(idPersona, JSON.stringify(persona));
    frmDatos.submit();
}

function mostrarDatos(){
    let respuesta = "";
    let keys = Object.keys(localStorage);
    console.log(typeof localStorage.getItem(keys[0]))
    for(let i=0; i< keys.length; i++){ 
        let txt = JSON.parse(localStorage.getItem(keys[i]))
        console.log(txt)
        respuesta +=  "<tr>" + "<td>" + txt.nombre+ "</td>" +
                     "<td>" + txt.email+ "</td>" +
                     "<td>" + txt.telefono+ "</td>"+
                     "</tr>";
    }

    document.getElementById("tableBody").innerHTML = respuesta;

}

function borrarDatos(){
    console.log("Borrado");
    window.localStorage.clear();        
    console.log(localStorage.length);
}

function calcular(num1, num2, myCallback){
    let suma = num1 + num2;
    myCallback(suma);
}

function displayDatos(texto){
    document.getElementById("demo").innerHTML = texto;
}

function intervalos(){
    setInterval(miFuncion, 1000);
}

function miFuncion(){
    let fecha = new Date();
    document.getElementById("demo").innerHTML = fecha.getHours() +
            ":" + fecha.getMinutes() + ": " + fecha.getSeconds();

}

function ejecutarApi(){
    let url = "https://api.thecatapi.com/v1/breeds";
    fetch(url, {
        headers:{
            'x-api-key': 'live_Q34IHYmqrIsBGh2A8OIFL8ssBI6bEfbA3cuil6v45Z4QzorEbYgwX1y8VctR26B',
          }
    })
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

        const mostrarData = (data) => {
            console.log(data.length);
            var rta="";
            for(let i=0;i<data.length;i++){
                if (data[i] != undefined){
                    rta += "<img src='" + data[i].image.url 
                        + "' heigth='300' width='300'> <br>";
                }
            }
            document.getElementById("demo").innerHTML = rta;
        }
} 
mostrarDatos();