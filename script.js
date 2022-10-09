
const defaultColor = "#000000";

window.addEventListener("load", startup);


function startup() {
    const colorPicker = document.querySelector('#colorPicker');
    const body = document.querySelector('#body');
    
    body.style.backgroundColor = "#98b37d";
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", updateFirst);
    colorPicker.select();
}


function updateFirst(event) {
    const salida = document.querySelector('#salida')

    if (body) {
        body.style.backgroundColor = event.target.value;

        salida.innerHTML = event.target.value
    }
}

