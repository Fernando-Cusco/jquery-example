$(document).ready(function() {
    console.log('Jquery ready');

    var datos = $("#datos");
    // load

    // datos.load("https://reqres.in/api/users?page=2");

    // get
    $.get("https://reqres.in/api/users",{page: 2}, function(response) {
        response.data.forEach((element, index) => {
            datos.append("<p>"+element.email+"</p>")
        });
    });

    // post
    

    $("#formulario").submit(function(e) {
        e.preventDefault();
        var usuario = {
            name: $('input[name="name"]').val(),
            job: $('input[name="job"]').val()
        };
        // $.post($(this).attr("action"), usuario, function(response) {
        //     console.log(response);
        // }).done(function(){
        //     alert("Usuario creado correctamente")
        // });
        $.ajax({
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function() {
                console.log('enviando usuario');
            },
            success: function(response) {
                console.log(response);
            },
            error: function(){
                console.log('Error');
            },
            timeout: 2000
        })
        return false;
    });

})