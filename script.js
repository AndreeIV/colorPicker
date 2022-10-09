// const defaultColor = "#000000";

// window.addEventListener("load", startup);


// function startup() {
//     const colorPicker = document.querySelector('#colorPicker');
    // const body = document.querySelector('#body');
    
//     body.style.backgroundColor = "#98b37d";
//     colorPicker.value = defaultColor;
//     colorPicker.addEventListener("input", updateFirst);
//     colorPicker.addEventListener('click', (e) => {
//         console.log(e)
//     })
// }

// function updateFirst(event) {
//     const salida = document.querySelector('#salida')

//     console.log(event)
//     if (body) {
//         body.style.backgroundColor = event.target.value;

//         salida.innerHTML = event.target.value
//     }
// }

const body = document.querySelector('#body');
    body.style.backgroundColor = "#e5c5c5";

const colorPicker = new iro.ColorPicker('#colorPicker', {
    // Set the size of the color picker
    width: 320,

    // Set the initial color to pink
    color: "#e5c5c5"
});

colorPicker.on('color:change', function(color) {
    body.style.backgroundColor = color.hexString;
})