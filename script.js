


document.addEventListener('DOMContentLoaded', iniciarApp())

function iniciarApp() {
    const colorDefault = '#ffffff';
    const salidaTexto = document.querySelector('#salida')
    const body = document.querySelector('#body').style;
    const colorRandom = document.querySelector('#colorRandom');
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
        color.hexstring = body.backgroundColor;
    
    
    })
    
    colorRandom.addEventListener('click', colorHEX);
    
    
    function generadoRandom() {
        let letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
        let random = (Math.random() * 15).toFixed(0);
    
        return letras[random];
    }
    function colorHEX() {
        let coolor = '';
    
        for(let i = 0; i < 6; i++) {
            coolor += generadoRandom();
        }
        
        result = '#' + coolor;
    
        salidaTexto.innerHTML = result;
        body.backgroundColor = result;
        colorPicker.color.hexString = result;
    }
    copiarColor()
}

function copiarColor() {
    const botonCopiar = document.querySelector('#botonCopiar');
    const salidaTexto = document.querySelector('#salida');

    botonCopiar.addEventListener('click', copiar)
    
    function copiar() {

        salidaTexto.select()
        // document.execCommand("selectAll")
        document.execCommand("copy")
        
        alert('copiado')

    }


    
    // document.addEventListener('keydown', (event) =>  {
        
    //     console.log(event)
    //     console.log(event.code)
    
    
    //     if(event.ctrlKey && event.code != 'ControlLeft') {
    //         ctrl = 'ControlLeft' + event.code
    
    //         console.log(ctrl)
    //     }
        
        
        
    // })
}