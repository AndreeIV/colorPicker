
const colorDefault = '#40D645';
const salidaTexto = document.querySelector('#salida')
const body = document.querySelector('#body').style;
const colorPicker = new iro.ColorPicker('#colorPicker', {
    // Set the size of the color picker
    width: 250,
    
    // Set the initial color to pink
    color: colorDefault
});


body.backgroundColor = colorDefault;
salidaTexto.innerHTML = colorDefault;


colorPicker.on('color:change', function(color) {
    
    body.backgroundColor = color.hexString;
    salidaTexto.innerHTML = color.hexString;
})