console.log('holas')
const apis = {
    Gato: 'https://api.thecatapi.com/v1/images/search',
    Perro: 'https://dog.ceo/api/breeds/image/random'

}

function llamarFetch(){
    elemento = document.getElementById('animal');
    fetch(apis[elemento.value])
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

        const mostrarData = (data) => {
            img = document.getElementById("animalAPI").src=data.message;
        }


        console.log(elemento.value)
}

        