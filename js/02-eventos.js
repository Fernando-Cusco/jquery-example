$(document).ready(function() {
    console.log('Jquery listo');

    // eventos mouse
    var caja = $('#caja');
    caja.mouseover( function () {
        $(this).css("background", "red").css("cursor", "pointer");
    });

    caja.mouseout( function () {
        $(this).css("background", "yellow").css("color", "black");;
    });

    // click doble click
    caja.click(function() {
        $(this).css("background", "blue").css("color", "white");
    });

    caja.dblclick(function() {
        $(this).css("background", "black").css("color", "white");
    });

    // Focus y blur
    var nombre = $("#nombre");
    var datos = $("#datos");
    nombre.focus(function() {
        $(this).css("border", "2px solid green")
    });
    
    nombre.blur(function() {
        $(this).css("border", "2px solid #ccc");
        var text = $(this).val();
        $("#datos").text(text).show();
    })

    // Mousedown y Mouseup
    datos.mousedown(function() {
        $(this).css("border-color", "gray");
    });

    datos.mouseup(function() {
        $(this).css("border-color", "black");
    });
    var pointer = $("#sigueme");
    var cursor = $('body');
    $(document).mousemove(function() {
        cursor.css("cursor", "none");
        pointer.css("left", event.clientX).css("top", event.clientY);
    });
    

})