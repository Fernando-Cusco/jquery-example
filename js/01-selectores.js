// verifica si el documento esta listo
// $ -> objeto = Jquery
$(document).ready(function() {
    console.log('Jquery listo');

    // selectores

    // por id
    $("#amarillo").css("background", "yellow");
    $("#azul").css("background", "blue").css("color", "white");
    $("#rojo").css("background", "red");

    // por clase
    var clase = $(".zebra").css("padding", "5px")
    $(".sin-borde").click(function() {
        console.log('Click');
        $(this).addClass('zebra');
    });

    // por etiqueta
    var parrafos = $('p').css("cursor", "pointer");
    parrafos.click(function() {
        var that = $(this);
        if (!that.hasClass('grande')) {
            that.addClass('grande');
        } else {
            that.removeClass('grande');
        }
    });

    // por atributo
    $('[title="Google"]').css("background", "yellow");
    $('[title="Youtube"]').css("background", "red");
    $('[title="Udemy"]').css("background", "green");

    // otros
    $('p, a').addClass('margen-superior');

    var busqueda = $('#caja').find('.resaltado'); // busqueda dentro del arbol
    console.log(busqueda);

    var busqueda1 = $('#caja .resaltado').eq(0).parent().find('[title="Google"]'); // busqueda nivel superior
    console.log(busqueda1);
    
})